
const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')

module.exports = {
    darkMode: 'class',
    plugins: [typography],
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