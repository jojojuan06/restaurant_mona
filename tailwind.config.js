module.exports = {
  important:'#app',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        'tablet': '680px',
        'tab-2':'500px',
        'midScreen':'880px',
        'xs':'390px',
        'xs-0':'300',
        'xxl':'1650px,'
      },
      colors: {
      },
      fontFamily:{
        body:['Pinyon Script'],
        sans:['font-sans'],

      },
      backgroundImage: {
        'banniere2': "url('/public/images/Bandeau_2.png')"
      },
      transformOrigin: {
                'lastScale': 'top right 50px;',
                'firstScale': 'top left 70px;'
      },
      backgroundSize: {
        'bannierecover2':'100% auto;'
      }
    },
  },
}
