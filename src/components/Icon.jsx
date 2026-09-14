export function Icon({ name, size = 22 }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'markup':
      return (
        <svg {...props}>
          <path d="M8 16 4 12l4-4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </svg>
      )
    case 'style':
      return (
        <svg {...props}>
          <path d="M4 20h4L18.5 9.5a2.12 2.12 0 0 0-3-3L5 14v6Z" />
          <path d="m13.5 6.5 4 4" />
        </svg>
      )
    case 'code':
      return (
        <svg {...props}>
          <path d="M8 8 4 12l4 4" />
          <path d="m16 8 4 4-4 4" />
        </svg>
      )
    case 'devices':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="12" height="10" rx="1.5" />
          <rect x="16" y="9" width="5" height="8" rx="1" />
          <path d="M7 19h4" />
        </svg>
      )
    case 'layout':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 9v11" />
        </svg>
      )
    case 'branch':
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="2.25" />
          <circle cx="6" cy="18" r="2.25" />
          <circle cx="18" cy="12" r="2.25" />
          <path d="M6 8.25v7.5" />
          <path d="M8.1 7.2c3.2.4 6 2.1 7.7 4.8" />
        </svg>
      )
    case 'react':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'database':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
          <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
        </svg>
      )
    case 'sun':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v1.5M12 19.5V21M4.93 4.93l1.06 1.06M17.99 17.99l1.06 1.06M3 12h1.5M19.5 12H21M4.93 19.07l1.06-1.06M17.99 6.01l1.06-1.06" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...props}>
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5Z" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...props}>
          <path d="M7 3.75h3.2l1.1 3.2-2 1.2a12.5 12.5 0 0 0 6.55 6.55l1.2-2 3.2 1.1v3.2A1.75 1.75 0 0 1 18.5 20 15.5 15.5 0 0 1 4 5.5 1.75 1.75 0 0 1 5.75 3.75Z" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...props}>
          <path d="M12 21s7-6.1 7-11.2A7 7 0 0 0 5 9.8C5 14.9 12 21 12 21Z" />
          <circle cx="12" cy="9.8" r="2.2" />
        </svg>
      )
    case 'github':
      return (
        <svg {...props}>
          <path d="M9 19c-4.3 1.4-4.3-2.1-6-2.5m12 4.5v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6 0C6.1 2.5 5 2.8 5 2.8a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.6 9.2c0 4.6 2.7 5.7 5.5 6-.6.5-.6 1.2-.5 2V21" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v7M8 7.2v.1M12 17v-4.2a2.3 2.3 0 0 1 4.6 0V17" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...props} width={16} height={16}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    default:
      return null
  }
}
