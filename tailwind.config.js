/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: theme => ({
      "img-tarefas" : "url('/images/background.png')"
    })
  }
}