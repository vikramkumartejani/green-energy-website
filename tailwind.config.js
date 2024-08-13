/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '0.4': '0.4px',
      },
      boxShadow:{
        'custom': '2px 4px 6px 0px #4F4F4F26'
      },
      screens: {
        'xs': '480px',  
        'sm': '640px', 
        'md': '768px', 
        'mdl': '900px',
        'lg': '1024px',  
        'xl': '1280px', 
        'xlg': '1368px', 
        '2xl': '1536px', 
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
