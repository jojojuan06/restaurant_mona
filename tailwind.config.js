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
      transformOrigin: {
                'lastScale': 'bottom right 50px;',
                'firstScale': 'bottom left 70px;'
      },
      backgroundSize: {
        'bannierecover2':'100% auto;'
      }
    },
  },
}
