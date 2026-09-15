import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <p className="section-kicker" data-reveal>
          About
        </p>
        <h2 id="about-title" className="section-title" data-reveal>
          A beginner developer, always learning and building.
        </h2>
        <div className={styles.grid}>
          <div className={styles.copy} data-reveal>
            <p>
              I&apos;m Princess Feona Lei Piñon, a beginner web developer passionate about creating
              clean, responsive, and user-friendly websites. I work with HTML, CSS, JavaScript, and
              React while continuously improving my skills through personal projects and hands-on
              learning.
            </p>
            <p>
              I&apos;m open to internships, freelance opportunities, and projects where I can gain
              experience, contribute, and grow as a developer.
            </p>
          </div>
          <dl className={styles.facts} data-reveal="delay">
            <div className={styles.fact}>
              <dt>Based in</dt>
              <dd>Philippines</dd>
            </div>
            <div className={styles.fact}>
              <dt>Focus</dt>
              <dd>Front-end &amp; responsive UI</dd>
            </div>
            <div className={styles.fact}>
              <dt>Open to</dt>
              <dd>Internships &amp; freelance</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
