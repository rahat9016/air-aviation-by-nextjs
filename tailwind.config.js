/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      keyframes: {
        wiggle: {
          '0%' :{transform: 'scale(1)',
          },
         '50%': {
            transform: 'scale(1.1)'
          }  ,
          '100%':{
            transform: 'scale(1)'
          }
        }},
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
        
      colors: {
        primary: "#204868",
        secondary: "#EA244E",
        gray: "#BBBBBB",
        blue: "#204868",
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1245px",
        },
      },
      boxShadow: {
        "3xl": "5px 3px 5px -3px rgba(0,0,0,0.36)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xsm: "320px",
        xm: "375px",
        xlg: "425px",
      },
      fontSize: {
        "3.5xl": "32px",
      },
      spacing: {
        mobileContainer: "24px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        "no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
