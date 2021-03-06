module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "import/extensions": 'off',
        "react/prefer-stateless-function": 'off',
    },
    "globals": {
        "compose": true,
        "document": true,
        "window": true
    }
};