/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'class',
  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
    "components/**/*.{js,ts,jsx,tsx}"

  ],

  theme: {

    extend: {
         colors: {
      'form-light': '#ffffff',
      'form-dark': '#1f2937', 
    },
    },

  },

  plugins: [],

}
