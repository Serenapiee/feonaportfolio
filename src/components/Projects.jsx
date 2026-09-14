import { projects } from '../data/projects'
import styles from './Projects.module.css'

function Thumbnail({ type, label }) {
  if (type === 'cafe') {
    return (
      <div className={`${styles.thumb} ${styles.thumbCafe}`} role="img" aria-label={`${label} thumbnail`}>
        <div className={styles.mug} />
      </div>
    )
  }

  if (type === 'studio') {
    return (
      <div className={`${styles.thumb} ${styles.thumbStudio}`} role="img" aria-label={`${label} thumbnail`}>
        <div className={styles.art}>
          <div className={styles.line} />
          <div className={`${styles.line} ${styles.lineShort}`} />
          <div className={styles.block} />
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.thumb} ${styles.thumbBoard}`} role="img" aria-label={`${label} thumbnail`}>
      <div className={styles.art}>
        <div className={styles.col}>
          <div className={styles.chip} />
        </div>
        <div className={styles.col}>
          <div className={styles.chip} />
          <div className={styles.chip} />
        </div>
        <div className={styles.col}>
          <div className={styles.chip} />
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <p className="section-kicker" data-reveal>
          Projects
        </p>
        <h2 id="projects-title" className="section-title" data-reveal>
          Selected work
        </h2>
        <p className="section-intro" data-reveal>
          A few pieces that show how I approach layout, interaction, and clean front-end work.
        </p>
        <ul className={styles.grid} data-reveal>
          {projects.map((project) => (
            <li key={project.id} className={styles.card}>
              <Thumbnail type={project.thumbnail} label={project.name} />
              <div className={styles.body}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.technologies.map((tech) => (
                    <li key={tech} className={styles.tag}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={styles.actions}>
                  <a className="btn btn-primary" href={project.liveUrl}>
                    Live Demo
                  </a>
                  <a className="btn btn-ghost" href={project.sourceUrl}>
                    GitHub
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
