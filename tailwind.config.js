// const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    theme: {
        extend: {
            colors: {
                primary: "#164F63",
                secondary: "#A3C0BA",
                neutral: "#FAFAFA"
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
            // TypeScript
            // 'plugins/**/*.ts',
            // 'nuxt.config.ts'
        ]
    }
}