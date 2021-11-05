module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-bg': "url('/src/img/auth-bg.svg')",
        bottom: "url('/src/img/wave.svg')",
        'search-1': "url('/src/img/search-comb-1.png')",
        'search-2': "url('/src/img/search-comb-2.png')",
        'profile-bg': "url('/src/img/profile_bg.png')",
      }),
      screens: {
        'md-sm': '768px',
      },
      boxShadow: {
        main: 'rgba(0, 0, 0, 0.15) 0px 4px 16px 0px',
      },
      colors: {
        main: '#FCFDFF',
        logo: '#0c008c',
      },
      gridTemplateColumns: {
        card: '80px 1fr 100px',
        modal: '50px 1fr 30px',
        mobile: '70px 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
