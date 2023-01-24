import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
        <p>From:</p>
        <img src="team-easy.png" alt="team e.a.s.y." /><br /><br />
        <p>For questions and comments, email us at</p>
        <a href="">easyedit_teameasy@gmail.com</a>
    </div>
  )
}