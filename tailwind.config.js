/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
    },
    colors: {
      Background : 'var(--BackGround)',
      Text : 'var(--Text)',
      Element : 'var(--Element)',
    },
    fontFamily:{
      'sans': ['Nunito Sans', 'sans-serif'],
    },
    fontWeight: {
       bold: 700,
    }
  },
  plugins: [],
}
/**https://ibtihelbs.github.io/reactcountriesapi/ */