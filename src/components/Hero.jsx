import profilePhoto from '../assets/profile-portrait.png'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="home" className={`container ${styles.hero}`} aria-labelledby="hero-name">
      <div data-reveal>
        <p className={styles.kicker}>Hi, I&apos;m</p>
        <h1 id="hero-name" className={styles.name}>
          Princess Feona Lei Piñon
        </h1>
        <p className={styles.role}>Web Developer</p>
        <p className={styles.intro}>
          I create clean, responsive, and user-friendly websites with a focus on modern design and
          functionality.
        </p>
        <div className={styles.actions}>
          <a className="btn btn-primary" href="#projects">
            View My Projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className={styles.portraitWrap} data-reveal="delay">
        <div className={styles.portrait}>
          <img
            className={styles.photo}
            src={profilePhoto}
            alt="Portrait of Princess Feona Lei Piñon"
            width="880"
            height="1024"
          />
        </div>
      </div>
    </section>
  )
}
