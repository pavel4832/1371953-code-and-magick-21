const path = require(`path`);

module.exports = {
  entry: [
    `./js/util.js`,
    `./js/stat.js`,
    `./js/backend.js`,
    `./js/debounce.js`,
    `./js/colorize.js`,
    `./js/wizard.js`,
    `./js/render.js`,
    `./js/setup.js`,
    `./js/dialog.js`
  ],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
