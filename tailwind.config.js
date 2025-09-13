/** @type {import('tailwindcss').Config} */

const relumeTailwind = require('@relume_io/relume-tailwind');

module.exports = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add Inter as default sans-serif font
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        'governor-bay': '#29339B',
        'malachite': '#0CCE6B',
        'french-gray': '#B8BAC8',
        'mineral-green': '#3B5249',
        'turquoise': '#45E1A8',
        'primary': 'hsl(var(--primary))',
        'secondary': '#0CCE6B',
        'accent': '#45E1A8',
        'neutral': '#B8BAC8',
        'dark': '#3B5249',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
      },
      backgroundColor: {
        'primary': 'hsl(var(--primary))',
        'secondary': '#0CCE6B',
        'tertiary': '#B8BAC8',
        'dark': '#3B5249',
        'light': '#45E1A8',
      },
      textColor: {
        'primary': 'hsl(var(--primary))',
        'secondary': '#0CCE6B',
        'tertiary': '#B8BAC8',
        'dark': '#3B5249',
        'light': '#45E1A8',
      },
      borderColor: {
        'primary': 'hsl(var(--primary))',
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

