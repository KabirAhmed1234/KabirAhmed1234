/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        primary: {
          DEFAULT: '#00FFFF',
          50: '#E6FFFF',
          100: '#CCFFFF',
          200: '#99FFFF',
          300: '#66FFFF',
          400: '#33FFFF',
          500: '#00FFFF',
          600: '#00CCCC',
          700: '#009999',
          800: '#006666',
          900: '#003333',
        },
        secondary: {
          DEFAULT: '#D3F85A',
          50: '#F9FFEE',
          100: '#F3FFDD',
          200: '#E9FDBB',
          300: '#E1FC99',
          400: '#DAFA77',
          500: '#D3F85A',
          600: '#C1E732',
          700: '#A5C918',
          800: '#7E9812',
          900: '#56670C',
        },
        accent: {
          DEFAULT: '#A259FF',
          50: '#F5EDFF',
          100: '#EBDAFF',
          200: '#D7B5FF',
          300: '#C390FF',
          400: '#B275FF',
          500: '#A259FF',
          600: '#8229FF',
          700: '#6A00F5',
          800: '#5300BC',
          900: '#3B0084',
        }
      },
      fontFamily: {
        display: ['Satoshi', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.8' },
          '50%': { transform: 'translateY(10px)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};