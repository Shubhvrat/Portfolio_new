/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(-40px)', opacity: '1' },
        },
    },
    animation: {
      float: 'float 6s ease-in-out infinite',
    },
  },
},
  plugins: [],
}

