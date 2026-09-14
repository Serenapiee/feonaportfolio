import { useEffect } from 'react'

export function useScrollReveal(selector = '[data-reveal]') {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight - 48 && rect.bottom > 40
      if (inView) {
        el.classList.add('is-visible')
      } else {
        observer.observe(el)
      }
    })
    return () => observer.disconnect()
  }, [selector])
}
