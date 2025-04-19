/** @type {import('tailwindcss').Config} */

import relumeTailwind from "@relume_io/relume-tailwind";

module.exports = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'governor-bay': '#29339B',
        'malachite': '#0CCE6B',
        'french-gray': '#B8BAC8',
        'mineral-green': '#3B5249',
        'turquoise': '#45E1A8',
        'primary': '#29339B',
        'secondary': '#0CCE6B',
        'accent': '#45E1A8',
        'neutral': '#B8BAC8',
        'dark': '#3B5249',
      },
      backgroundColor: {
        'primary': '#29339B',
        'secondary': '#0CCE6B',
        'tertiary': '#B8BAC8',
        'dark': '#3B5249',
        'light': '#45E1A8',
      },
      textColor: {
        'primary': '#29339B',
        'secondary': '#0CCE6B',
        'tertiary': '#B8BAC8',
        'dark': '#3B5249',
        'light': '#45E1A8',
      },
      borderColor: {
        'primary': '#29339B',
        'secondary': '#0CCE6B',
        'tertiary': '#B8BAC8',
        'dark': '#3B5249',
        'light': '#45E1A8',
      },
    },
  },
  plugins: [],
  presets: [relumeTailwind],
}

