module.exports = {
  "extends": ["airbnb-base", "plugin:vue/recommended"],
  "plugins": ["vue", "import"],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js','.jsx','.vue']
      }
    },
  },
  "rules": {
    "no-new": 0,
    "no-alert": 0,
    "no-console": 0,
    "consistent-return": 0,
    "class-methods-use-this": 0,
    "prefer-destructuring": 0,
    "max-len": 0,
    "no-param-reassign": 0,
    "no-restricted-globals": 0,
    "array-callback-return": 0,
    "quotes": ["error", "double"],
    "vue/require-default-prop": 0,
    "vue/require-prop-types": 0
  }
};
