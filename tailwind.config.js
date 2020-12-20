const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    mode: "layers",
    
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: ' #888883'
        },
        fontFamily: {
          body:['Nunito']
        }
      },
    },
    variants: {
      extend: {
      },
    },
    plugins: [],
  }
}
