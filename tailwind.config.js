/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'banne': "url('images/duet-banne.png')",
                'footer-texture': "url('/img/footer-texture.png')",
            }
        },
    },
    variants: {
        display: ['group-focus'],
        opacity: ['group-focus'],
        inset: ['group-focus'],
    },
    plugins: [],
}