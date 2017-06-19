// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "postcss-initial": {},
    "postcss-autoreset": {
      reset: {
        "margin": 0,
        "padding": 0,
        "list-style-type": 'none',
        "border": 'none'
      }
    },
    "postcss-cssnext": {}
  }
}
