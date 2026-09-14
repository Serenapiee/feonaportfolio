import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <p className="section-kicker" data-reveal>
          About
        </p>
        <h2 id="about-title" className="section-title" data-reveal>
          A developer who cares how a site feels to use
        </h2>
        <div className={styles.grid}>
          <div className={styles.copy} data-reveal>
            <p>
              I&apos;m Princess Feona Lei Piñon. I build websites that stay out of the way — clear
              structure, readable type, and layouts that still make sense on a phone.
            </p>
            <p>
              I started with HTML and CSS, then moved into JavaScript and React because I wanted more
              control over how a page looks and behaves. I like the quiet work: spacing, hierarchy, and
              making sure a button does what you expect.
            </p>
            <p>
              I&apos;m looking for internships, freelance projects, and chances to keep growing — especially
              work that values clean design as much as working code.
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
