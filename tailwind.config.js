/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greybackground: '#282C33', // Add your custom color
      },
      fontFamily: {
        courier: ['Courier New', 'monospace'], // Add Courier font
        fira: ['Fira Code', 'monospace']
      
      },


    },
  },
  plugins: [],
}


