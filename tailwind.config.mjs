export default {
    theme: {
        extend: {
            Keyframes: {
                'border-spin': {
                    '100%': {
                        transform: 'rotate(-360deg)',
                    },
                },
            },
            animation: {
                'border-spin': 'border-spin 7s linear infinite',
            },
        },
    },
    plugins: [],
}