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
        headpage: `44rem minmax(24rem,auto) minmax(24rem,auto) minmax(24rem,auto) minmax(24rem,auto)`,
        headpageSM: `42rem minmax(22rem,auto) minmax(22rem,auto) minmax(22rem,auto) minmax(22rem,auto)`
      }
    },
  },
  plugins: [],
}