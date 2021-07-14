module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        amazon_blue:{
          light:"#232f33",
          DESFUALT:"#131921"
        }
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
