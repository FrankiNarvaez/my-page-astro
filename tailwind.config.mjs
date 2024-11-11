/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#8B5DFF',
        'white-color': '#F8FCFB',
        'text-white': '#f8f7ff95',
        'gray-color': '#9f9f9f',
        'black-color': '#1E201E',
        'gray-project': '#D4D3D3',
        'gray-black': '#334155',
        'orange-semi-black': '#9C2B10',
        'orange-semi-white': '#fb5607',
        'border-color': '#BABABA'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
