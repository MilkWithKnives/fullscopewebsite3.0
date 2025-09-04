/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: { center: true, padding: '2rem' },
        extend: {
            colors: {
                // coffee (dark base), mascarpone (cream highlights), wine (accent)
                coffee: { 1000: '#0D0706', 900: '#18100D', 800: '#201410', 700: '#2B1915', 600: '#3A221C' },
                mascarpone: { DEFAULT: '#F6EFE6', 2: '#E9E0D6' },
                wine: { DEFAULT: '#8F2432', 700: '#A73341' },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
                serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
            },
            boxShadow: {
                wine: '0 10px 30px rgba(143,36,50,.25)',
                card: '0 12px 32px rgba(0,0,0,.28)',
            },
            letterSpacing: {
                tightest: '-.03em',
                wideish: '.18em',
            },
        },
    },
    plugins: [],
};