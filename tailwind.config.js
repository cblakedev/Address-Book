/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
    theme: {
        screens: {
            xs: '500px',
            md: '768px'
        },
        extend: {}
    },
    plugins: []
}
