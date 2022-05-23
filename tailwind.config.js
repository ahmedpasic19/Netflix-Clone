module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        netflixbanner: "url('../src/nefliximages/neflix-banner.png')"
      },
      gridTemplateRows : {
        headpage: `repeat(5,minmax(44rem,auto))`,
        headpageSM: `repeat(5,minmax(42rem,auto))`
      }
    },
  },
  plugins: [],
}