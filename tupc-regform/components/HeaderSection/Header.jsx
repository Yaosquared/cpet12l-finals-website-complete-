import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <img src="logo.png" alt="logo" />
      <h1>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES</h1>
    </div>
  )
}