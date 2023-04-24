/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container :{
      container : true,
    },
    spacing: {
      '0':'0',
      '1': '5px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '30px',
      '6': '40px',
      '7': '50px',
      '8': '60px',
      '100':'100px'
    },
    screens:{
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    colors: {
      transparent: 'transparent',
    },
    letterSpacing:{
      'wide-s':'0.25px',
      'wide-x':'0.32px',
      'wider-x':'1.2px'
    },
    extend: {
      backgroundImage: {
        'gradientR':'linear-gradient(108.94deg, rgba(8, 97, 147, 0.54) -9.26%, #98FFA9 -9.26%, #030C04 27.28%);'
      },
      height:{
        'cos':'calc(100% - 130px)',
        '24':'24px',
        '800':'800px',
        '91':'91px',
        '110':'110px'
      },
      fontFamily: {
        'Playfair':['PlayfairDisplay' , 'serif'],
        'Inter':['Inter', 'sans-serif']
      },
      colors: {
        'white':'#ffffff',
        'brightgreen':'rgba(18, 206, 49, 1)',
        'mainblack':'rgba(3, 12, 4, 1)',
        'brightgrey':'rgba(126, 138, 128, 1)',
        'brightblack':'rgba(1, 19, 12, 0.25);',
        'borderclr':'rgba(155, 193, 177, 0.15);',
        'grey':'rgba(174, 185, 176, 1)',
        'oldclr':'rgba(152,255,169,1)',
        'tikclr':'rgba(8,97,147,0.54)',
      },
      fontSize :{
        '15':'15px',
        '36':'36px'
      },
      width: {
        '0':'0',
        '24':'24px',
        '260':'260px',
        '624':'624px',
        '110':'110px'
      },
      lineHeight:{
        'extra-loose':'48px',
      },
      gridTemplateColumns: {
        'i-direct':'repeat(auto-fill,minmax(250px,1fr))',
        'direct':'repeat(auto-fill,minmax(366px,1fr))',
        'direct-xs':'repeat(auto-fill,minmax(350px,1fr))',
        'direct-xv':'repeat(auto-fill,minmax(500px,1fr))',
      }
    },
  },
  plugins: [],
}

