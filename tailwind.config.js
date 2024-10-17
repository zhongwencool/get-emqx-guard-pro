/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './theme/components/**/*.{ts,tsx}',
    './app/globals.css',
    './docs/guide/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {    
    extend: {
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          }},
      },
      animation: {                
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",      
      }
    },
  },
  prefix: 'tw-',
  plugins: [],
};