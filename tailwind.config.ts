import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - HRMS Theme (Pink/Magenta)
        'primary-pink': '#f7598f',
        'primary-pink-dark': '#e03568',
        'primary-pink-light': '#ff85a3',
        // Accent Colors
        'accent-blue': '#4FC3F7',
        'success-green': '#10b981',
        'success-green-light': '#34d399',
        // Backgrounds
        'deep-charcoal': '#121212',
        'graphite-dark': '#1A1D25',
        'card-dark': '#1e1e1e',
        // Text
        'soft-white': '#F5F7FA',
        'muted-grey': '#A5AABB',
        // Legacy support
        'neon-blue': '#4FC3F7',
        'purple-glow': '#f7598f',
        'aqua-mint': '#10b981',
        'amber-glow': '#FFC163',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'display': ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #f7598f 0%, #e03568 100%)',
        'pink-gradient': 'linear-gradient(135deg, #ff85a3 0%, #f7598f 50%, #e03568 100%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(79, 195, 247, 0.5)',
        'neon-pink': '0 0 20px rgba(247, 89, 143, 0.5)',
        'pink-glow': '0 0 30px rgba(247, 89, 143, 0.4)',
        'glow': '0 0 30px rgba(247, 89, 143, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(247, 89, 143, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(224, 53, 104, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
export default config


