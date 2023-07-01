module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      aspectRatio: {}
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // don't forget to add the plugin
  ],
  variants: {
    extend: {
      opacity: ['group-hover'],
    }
  }
}
