/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    
  ],

  theme: {
    extend: {
      width: {
        'custom': '49%', // You can set this to any value you want
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

