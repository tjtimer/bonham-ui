// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "postcss-initial": {
      "margin": 0,
    },
    "postcss-autoreset": {
      reset: {
        "padding": 0,
        "border": 'none',
        "list-style-type": 'none',
        "box-sizing": 'border-box'
      }
    },
    "postcss-cssnext": {}
  }
}
