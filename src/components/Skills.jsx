import { skills } from '../data/skills'
import { Icon } from './Icon'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <p className="section-kicker" data-reveal>
          Skills
        </p>
        <h2 id="skills-title" className="section-title" data-reveal>
          Tools I work with
        </h2>
        <p className="section-intro" data-reveal>
          The core front-end tools I use to design, build, and ship websites.
        </p>
        <ul className={styles.grid} data-reveal>
          {skills.map((skill) => (
            <li key={skill.id} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={skill.icon} />
              </span>
              <span className={styles.name}>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
