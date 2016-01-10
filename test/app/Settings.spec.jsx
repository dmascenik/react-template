var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE)

describe('Settings', () => {
  var Settings = require('../../src/app/Settings.jsx')

  it('renders expected text', () => {
    jsx.assertRender(Settings, {}, 'Settings Page')
  })
})
