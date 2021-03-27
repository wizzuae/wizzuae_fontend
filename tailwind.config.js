
const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')
const aspect_ratio = require('windicss/plugin/aspect-ratio')

module.exports = {
    darkMode: 'class',
    plugins: [typography, aspect_ratio],
    theme: {
        extend: {
            colors: {
                primary: "#1e3a8a",
                secondary: "#EFF6FF",
                neutral: "#FAFAFA",
            },
            backgroundImage: {
                primary: 'linear-gradient(to right, #1e3a8a, #0891B2 70%, #1e3a8a )',
            },
        }
    }
}