/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:    '#0A0F1F',   // fundo escuro
        secondary:  '#1F2633',   // cartões e camadas
        accent:     '#EAE2B7',   // texto off-white
        muted:      '#A0A4A8'    // texto secundário cinza
      },
      backgroundImage: {
        // Duas manchas radiais + gradiente linear
        'cta-pattern':
          'radial-gradient(circle at 20% 30%, rgba(234,226,183,0.15), transparent 50%), ' +
          'radial-gradient(circle at 80% 70%, rgba(234,226,183,0.1), transparent 50%), ' +
          'linear-gradient(135deg, #0A0F1F 0%, #1F2633 100%)'
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)',    opacity: '0.4' },
          '50%':       { transform: 'scale(1.1)',  opacity: '0.6' }
        },
        pulseVerySlow: {
          '0%, 100%': { transform: 'scale(1)',     opacity: '0.2' },
          '50%':       { transform: 'scale(1.05)', opacity: '0.4' }
        },
        // Bolhas que se movem
        blob: {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' }
        },
        // Fade-in suave para títulos
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        pulseSlow:     'pulseSlow 8s ease-in-out infinite',
        pulseVerySlow: 'pulseVerySlow 12s ease-in-out infinite',
        blob:          'blob 8s ease-in-out infinite',
        fadeIn:        'fadeIn 0.6s ease-out forwards'
      }
    }
  },
  plugins: []
}
