module.exports = {
  content: [
    './templates/**/*.html',
    './static/css/*.css',
    './static/js/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'blackish': '#09090B',
        'purple': '#702FC4',
        'violet': '#5C00C0',
        'pink': '#ED008C',
      },
      animation: {
        'background-pan': 'background-pan 3s linear infinite',
      },
      keyframes: {
        'background-pan': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
