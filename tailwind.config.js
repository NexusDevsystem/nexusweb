// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#0A0F1F',
        secondary: '#1F2633',
        accent:    '#EAE2B7',
        muted:     '#A0A4A8'
      },
      backgroundImage: {
        'cta-pattern':
          'radial-gradient(circle at 20% 30%, rgba(234,226,183,0.15), transparent 50%), ' +
          'radial-gradient(circle at 80% 70%, rgba(234,226,183,0.1), transparent 50%), ' +
          'linear-gradient(135deg, #0A0F1F 0%, #1F2633 100%)'
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)',   opacity: '0.4' },
          '50%':       { transform: 'scale(1.1)', opacity: '0.6' }
        },
        pulseVerySlow: {
          '0%, 100%': { transform: 'scale(1)',     opacity: '0.2' },
          '50%':       { transform: 'scale(1.05)', opacity: '0.4' }
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        pulseSlow:   'pulseSlow 8s ease-in-out infinite',
        pulseVerySlow:'pulseVerySlow 12s ease-in-out infinite',
        fadeIn:      'fadeIn 0.6s ease-out forwards',
        slideIn:     'slideIn 0.5s ease-out forwards'
      }
    }
  },
  plugins: []
}
