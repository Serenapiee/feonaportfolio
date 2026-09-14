import { useEffect, useState } from 'react'
import { navLinks, sectionIds } from '../data/nav'
import { useActiveSection } from '../hooks/useActiveSection'
import { Icon } from './Icon'
import styles from './Navbar.module.css'

export function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 832) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <nav className={`${styles.nav} ${styles.navDesktop}`} aria-label="Primary">
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.link} ${activeId === link.href.slice(1) ? styles.linkActive : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.iconBtn}
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={theme === 'dark'}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
            </button>
            <button
              type="button"
              className={`${styles.iconBtn} ${styles.menuBtn}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={18} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <button type="button" className={styles.overlay} aria-label="Close menu" onClick={closeMenu} />
      ) : null}

      <nav
        id="mobile-nav"
        className={`${styles.navMobile} ${menuOpen ? styles.navMobileOpen : ''}`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.listMobile}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.linkMobile} ${activeId === link.href.slice(1) ? styles.linkMobileActive : ''}`}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
