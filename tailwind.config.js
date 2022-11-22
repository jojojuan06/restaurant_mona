module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        'tablet': '680px',
        'midScreen':'880px',
      },
      keyframes: {
      },
      animation: {
      },
      colors: {
      },
      fontFamily:{
        body:['Pinyon Script']
      },
      backgroundImage: {
        'banniere2': "url('/public/images/Bandeau_2.png')"
      }
    },
  },
}
