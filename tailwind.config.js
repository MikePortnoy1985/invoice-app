module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', '*.{html,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFF',
      'main-light': '#F8F8FB',
      'main-dark': '#0C0E16',
      'custom-purple': '#7C5DFA',
      'custom-lilac': '#9277FF',
      'custom-red': '#EC5757',
      'custom-pink': '#FF9797',
      'custom-dark-1': '#141624',
      'custom-dark-2': '#1E2139',
      'custom-dark-3': '#373B53',
      'custom-dark-4': '#494E6E',
      'custom-dark-5': '#0C0E16',
      'custom-dark-gray': '#252945',
      'custom-lavender': '#DFE3FA',
      'custom-gray': '#888EB0',
      'custom-light-purple': '#7E88C3',
      'custom-light-1': '#F9FAFE',
    },
    fontSize: {
      '2xl': [
        '2rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '-1px',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '1.375rem',
          letterSpacing: '-0.63px',
        },
      ],
      l: [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.8px',
        },
      ],
      base: [
        '0.75rem',
        {
          lineHeight: '0.9375rem',
          letterSpacing: '-0.25px',
        },
      ],
      sm: [
        '0.6875rem',
        {
          lineHeight: '1.125rem',
          letterSpacing: '-0.23px',
        },
      ],
    },
    extend: {
      screens: {
        xs: '375px',
        md: '768px',
        xl: '1440px',
      },
      spacing: {
        18: '4.5rem',
      },
      padding: {
        'pt-18': '4.5rem',
      },
      width: {
        'w-18': '4.5rem',
      },
      height: {
        'h-18': '4.5rem',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
