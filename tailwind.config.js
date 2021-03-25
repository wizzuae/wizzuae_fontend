
const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')
const aspect_ratio = require('windicss/plugin/aspect-ratio')

module.exports = {
    darkMode: 'class',
    plugins: [typography, aspect_ratio],
    theme: {
        extend: {
            colors: {
                primary: "#164F63",
                secondary: "#A3C0BA",
                neutral: "#FAFAFA"
            },
        }
    }
}