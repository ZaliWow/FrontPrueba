/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'Hero':'url(/public/images/BgHero.webp)',
        
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(255, 255, 255, 0.5)',
        'custom-dark': '0 2px 4px rgba(0, 0, 0, 0.5)',
        'custom-blue': '0 2px 4px rgba(0, 0, 255, 0.5)',
        // Agrega más colores personalizados aquí
      },
     
    },
  },
  plugins: [require('daisyui'),],
}

