module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'black-600':"#1A1D21",
      'black-100':"#E8E9E9",
      'black-200':"#CDCECF",
      'black-400':"#686B6E",
      'black-300':"#9B9C9E",
      'black-500':"#363A3D",

      'green':"#B6F09C",
      red:"#E42C2C"
    },
    extend: {
        group: ['hover', 'focus'], // Uncomment and add 'group' to the array
    },
  },
  plugins: [],
};