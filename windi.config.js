
// import { defineConfig } from 'windicss/helpers'
const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')
const aspect_ratio = require('windicss/plugin/aspect-ratio')

module.exports = {
    darkMode: 'class',
    plugins: [typography, aspect_ratio],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                lg: "1280px",
                xl: "1280px",
                "2xl": "1280px"
            }
        },
        extend: {
            colors: {
                primary: "#0074D9",
                secondary: "#E5E7EB",
                neutral: "#FAFAFA",
                brandBlack: ""
            },
            backgroundImage: {
                primary: 'radial-gradient(at 50% 100%,  #1CA7EC, #0074D9)',
                // primary: 'radial-gradient(at 50% 100%,  rgba(8, 145, 178, 0.75), rgba(15, 1, 94, 1))',
                // primary: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(31, 31, 112, 1) , rgba(105, 105, 236, 1)  )',
                // primary: 'radial-gradient(at 100% 10%, rgba(123, 22, 255, 0.75),rgb(15, 1, 94))',
                // primary: 'linear-gradient(to right, rgba(30, 58, 138, 1), rgba(8, 145, 178, 0.75) 70%, rgba(30, 58, 138, 1) )',
                // primary: 'linear-gradient(to right, #1e3a8a, #0891B2 70%, #1e3a8a )',
            },
        },
    },
    extract: {
        include: [
            '*/**/*.{vue,jsx,tsx,svelte}',
            'shared/**/*.{vue,ts}',
        ]
    },
}