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
        headpage: `44rem 0.5rem minmax(36rem,auto) 0.5rem minmax(36rem,auto) 0.5rem minmax(36rem,auto 0.5rem) minmax(36rem,auto)`,
        headpageSM: `42rem 0.5rem minmax(32rem,auto) 0.5rem minmax(32rem,auto) 0.5rem minmax(32rem,auto) 0.5rem minmax(32rem,auto)`
      }
    },
  },
  plugins: [],
}