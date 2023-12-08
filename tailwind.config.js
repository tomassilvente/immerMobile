/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgTicket: '#FFD6B8',

        // Below mentioned colors can be used with any classes with color params (bg-, border-, text-, etc)
        // in front of every vars is the name of there corresponding Figma var name
        // DEFAULT can be accessed by simply writing the var name the DEFAULT is within 
        // e.g. bg-primary will access color #FF6C00
        //      and bg-primary-pressed will access #E56100 and so on....
        //
        // And every colors with Normal as there endpoint can also be accessed by default
        // e.g. to access color "Light/Color/System/success/Normal"  "bg-sys-success" will access the normal color

        // Inorder to use alpha(opacity) we require to use /<opacity> at the end of our color values
        // in format <class>-<color>/<alpha-value> ---> border-b-sys-err-light/80

        // And for better assistance with colors and other tailwindcss classes 
        // you are requested to use Tailwind CSS Intellisense by Tailwind labs

        primary:{
          DEFAULT:'#FF6C00',  // Primary Color/Orange
          pressed:'#E56100',  // Primary Color/Orange - Pressed
          hover:'#F86900',    // Primary Color/Orange - Hover
          500: "#FF7711",     // Primary Main - 500
          400: "#FF9241",     // Primary Main - 400
          300: "#FFAD70",     // Primary Main - 300
          200: "#FFC9A0",     // Primary Main - 200
          100: "#FFD6B8",     // Primary Main - 100
        },
        sys:{
          success:{
            DEFAULT: "#00AF54", // Light/Color/System/success/Normal
            light: "#24DD7D",   // Light/Color/System/success/Light
            dark: "#0F8849",    // Light/Color/System/success/Dark
          },
          err:{
            DEFAULT: "#E03616", // Light/Color/System/error/Normal
            light: "#FD5839",   // Light/Color/System/error/Light
            dark: "#BB2D13"     // Light/Color/System/error/Dark
          }
        },
        base:{
          primary:{
            DEFAULT:"#333232",  // Light/Color/Base/primary/Normal
            light:"#555555",    // Light/Color/Base/primary/Light
            dark:"#000000"      // Light/Color/Base/primary/Dark
          },
          secondary:{
            DEFAULT:"#7C7C7C",  // Light/Color/Base/Secondary/Normal
            light:"#ABABAB",    // Light/Color/Base/Secondary/Light
            dark:"#505050"      // Light/Color/Base/Secondary/Dark
          },
          tertiary:{
            DEFAULT:"#EDEEF1",  // Light/Color/Base/Tertiary/Normal
            light:"#FFFFFF",    // Light/Color/Base/Tertiary/Light
            dark:"#DDDDDD"      // Light/Color/Base/Tertiary/Dark
          }
        }
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    
  ],
}
