import { contact } from '../data/contact'
import { Icon } from './Icon'
import styles from './Footer.module.css'

const social = [
  { name: 'Email', href: `mailto:${contact.email}`, icon: 'mail' },
  { name: 'GitHub', href: contact.github, icon: 'github' },
  { name: 'LinkedIn', href: contact.linkedin, icon: 'linkedin' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>© 2026 Princess Feona Lei Piñon. All Rights Reserved.</p>
        <ul className={styles.social}>
          {social.map((item) => (
            <li key={item.name}>
              <a className={styles.link} href={item.href} aria-label={item.name}>
                <Icon name={item.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
