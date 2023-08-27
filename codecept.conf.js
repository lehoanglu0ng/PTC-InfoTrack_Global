const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in/api'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'PTC-InfoTrack_Global'
}