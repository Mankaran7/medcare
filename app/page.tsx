import Image from "next/image";
import styles from "./page.module.css";

export default function HeroSection() {
  return (
    
    <section className={styles.heroSection}>
      <div className={styles.heroleft}>
        <div className={styles.heroleftText}>
         <h1>Health in Your <br/>Hands.</h1>
         <p>
          Take control of your health with CareMate. Book <br/> appointments with medical professionals and stay <br/> on top of your well-being, all in one place.
        </p>
        </div>

        <div className={styles.herobutton}>
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>
      <div className={styles.heroImage}>
      <div className={styles.heroImage}>
  <Image
    src="/hero-image.png"
    alt="Doctor with patient"
    fill
    style={{ objectFit: "cover" }}
  />
</div>

      </div>
    </section>
  );
}
