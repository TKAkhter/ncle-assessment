/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontSize: {
      'sm': '0.75rem',
      'sm-2': '0.875rem',
      'base': '1rem',
      'base-2': '1.25rem',
      'md': '1.4375rem',
      'lg': '1.5rem',
      'xl': '1.953rem',
      '2xl': '2.441rem',
      '3xl': '3rem',
      '4xl': '3.5rem',
    },
    extend: {
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      zIndex: ({ theme }) => ({
        ...theme.zIndex,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      }),
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
    , require('@tailwindcss/forms')
    , require('@tailwindcss/line-clamp')
    , require('@tailwindcss/typography')
  ],
};
