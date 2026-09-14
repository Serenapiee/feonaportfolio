import { useState } from 'react'
import { contact } from '../data/contact'
import { Icon } from './Icon'
import styles from './Contact.module.css'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const details = [
  { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'phone', label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: 'pin', label: 'Location', value: contact.location },
  { icon: 'github', label: 'GitHub', value: 'github.com/feonapinon', href: contact.github },
  { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/feonapinon', href: contact.linkedin },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) {
    errors.subject = 'Please add a subject.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setSubmitted(false)
      return
    }
    setSubmitted(true)
    setValues({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <p className="section-kicker" data-reveal>
          Contact
        </p>
        <h2 id="contact-title" className="section-title" data-reveal>
          Let&apos;s work together
        </h2>
        <p className="section-intro" data-reveal>
          For internships, freelance work, or a project you&apos;d like to discuss — send a note and
          I&apos;ll get back to you.
        </p>

        <div className={styles.layout}>
          <ul className={styles.list} data-reveal>
            {details.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a className={styles.item} href={item.href}>
                    <span className={styles.icon}>
                      <Icon name={item.icon} size={20} />
                    </span>
                    <span>
                      <span className={styles.label}>{item.label}</span>
                      <span className={styles.value}>{item.value}</span>
                    </span>
                  </a>
                ) : (
                  <div className={styles.item}>
                    <span className={styles.icon}>
                      <Icon name={item.icon} size={20} />
                    </span>
                    <span>
                      <span className={styles.label}>{item.label}</span>
                      <span className={styles.value}>{item.value}</span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <form className={styles.form} onSubmit={handleSubmit} noValidate data-reveal="delay">
            {submitted ? (
              <p className={styles.status} role="status">
                Thanks — your message is ready to send. Replace this form with your email service when
                you go live.
              </p>
            ) : null}

            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name ? (
                <span id="name-error" className={styles.error}>
                  {errors.name}
                </span>
              ) : null}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email ? (
                <span id="email-error" className={styles.error}>
                  {errors.email}
                </span>
              ) : null}
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject ? (
                <span id="subject-error" className={styles.error}>
                  {errors.subject}
                </span>
              ) : null}
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? (
                <span id="message-error" className={styles.error}>
                  {errors.message}
                </span>
              ) : null}
            </div>

            <button className={`btn btn-primary ${styles.submit}`} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
