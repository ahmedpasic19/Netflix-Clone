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
        headpage: `44rem minmax(36rem,auto) 0.5rem minmax(36rem,auto) 0.5rem minmax(36rem,auto 0.5rem) minmax(36rem,auto)`,
        headpageSM: `42rem minmax(32rem,auto) 0.5rem minmax(32rem,auto) 0.5rem minmax(32rem,auto) 0.5rem minmax(32rem,auto)`,
        app: `4rem auto 24rem`,
        appSM: `2.5rem auto 24rem`
      },
      flex: {
        1: `1`,
      },
      colors: {
        'netflix-gray': '#333333',
      }
    },
  },
  plugins: [],
}