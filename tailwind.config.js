module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        'tablet': '680px',
        'midScreen':'880px',
      },
      colors: {
      },
      fontFamily:{
        body:['Pinyon Script']
      },
      backgroundImage: {
        'banniere2': "url('/public/images/Bandeau_2.png')"
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity:'0' },
          '100%': { opacity:'1'},
        }
      },
      animation: {
          fadeSlide: 'fadeSlide 1.2s ease-in  forwards',
      }
    },
  },
}
