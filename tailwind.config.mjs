/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#8b5cf6',
          600: '#7c3aed'
        },
        secondary: {
          500: '#6366f1'
        },
        accent: {
          500: '#ec4899'
        }
      }
    }
  },
  safelist: [
    'bt-pr',
    'bt-sc',
    'cd',
    'gr-tx'
  ],
  plugins: [],
}