/** @type {import('tailwindcss').Config} */
import withTM from '@material-tailwind/react/utils/withMT'

export default withTM({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  container: {
    center: true
  },
  theme: {
    extend: {},
  },
  plugins: [],
})