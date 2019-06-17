module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["react-app", "eslint:recommended", "standard"],
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            "avoid-escape"
        ],
        "semi": [
            "error",
            "never"
        ],
        "prefer-const": ["error"],
        "no-console": 0,
        "no-labels": 0,
        "multiline-ternary": [
            "error",
            "never"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "camelcase": 0
    },
    "settings": {
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true,
                "classes": true
            }
        }
    },
    "globals": {
        "Raven": true
    }
};