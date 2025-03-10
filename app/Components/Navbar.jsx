import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.Links}>

        <div className={styles.logo}>
            <Image src="/Frame.png" alt="MedLogo" width={40} height={25}   />
            <span>MedCare</span>
        </div>
        <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Appointments</Link></li>
                <li><Link href="/">Health Blog</Link></li>
                <li><Link href="/">Reviews</Link></li>
        </ul>
        
      </div>

      <div className={styles.buttons}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.registerBtn}>Register</button>
      </div>

    </nav>
  );
}
