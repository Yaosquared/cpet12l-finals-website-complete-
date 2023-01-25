import styles from "./Body.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("*Please provide your first name"),
  lastName: yup.string().required("*Please provide your last name"),
  email: yup.string().email().required("*Please provide a valid email address"),
  phoneNum: yup.string().matches((/^(09|\+639)\d{9}$/), '*Invalid phone number').required(),
  address: yup.string().required("*Please provide your address"),
  isOldStudent: yup.string().nullable().required("*Please select a radio option"),
  reason: yup.string().required("*Please provide reason")
}).required();

export default function Body() {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      fetch('/api/reginfo', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      alert("Your info has been added successfully")
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className={styles.container}>
        <h2>STUDENT ACCESS MODULE</h2>
        <div className={styles.formcontainer}>
          <form onSubmit={handleSubmit(onSubmit)} >
            <h3>REGISTRATION FORM</h3>
            <hr /><br />
            <label htmlFor="fname">First Name: </label><br />
            <input type="text" id="fname" name="firstName" {...register("firstName")} /><br />
            <p> {errors.firstName?.message} </p>
            <br />
            <label htmlFor="lname">Last Name: </label><br />
            <input type="text" id="lname" name="lastName" {...register("lastName")} /><br />
            <p> {errors.lastName?.message} </p>
            <br />
            <label htmlFor="email">Email: </label><br />
            <input type="email" id="email" name="email" {...register("email")} /><br />
            <p> {errors.email?.message} </p>
            <br />
            <label htmlFor="number">Mobile Number: </label><br />
            <input type="text" id="number" name="phoneNum" {...register("phoneNum")} /><br />
            <p> {errors.phoneNum?.message} </p>
            <br />
            <label htmlFor="address">Address: </label><br />
            <input type="text" id="address" name="address" {...register("address")} /><br />
            <p> {errors.address?.message} </p>
            <br />
            <label>Old TUP Student? </label>
            <div className={styles.radio}>
              <input type="radio" id="yes" name="isOldStudent" value="yes" {...register("isOldStudent")}/>
              <label htmlFor="yes">YES</label>
              <input type="radio" id="no" name="isOldStudent" value="no" {...register("isOldStudent")}/>
              <label htmlFor="no">NO</label><br />
              <p>{errors.isOldStudent?.message}</p>
              <br />
            </div>
            <label htmlFor="reason">Why do you want to study in TUP?</label><br />
            <textarea name="reason" {...register("reason")}/><br />
            <p> {errors.reason?.message} </p>
            <br />
            <div className={styles.button}>
              <input type="submit" value="Submit" /><br />
            </div>
          </form>
        </div>
    </div>
  )
}
