import { services } from '../data/services'
import styles from './Services.module.css'

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <p className="section-kicker" data-reveal>
          Services
        </p>
        <h2 id="services-title" className="section-title" data-reveal>
          How I can help
        </h2>
        <p className="section-intro" data-reveal>
          Practical web work for students, small businesses, and anyone who needs a clear, reliable
          site.
        </p>
        <ul className={styles.grid} data-reveal>
          {services.map((service, index) => (
            <li key={service.id} className={styles.card}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
