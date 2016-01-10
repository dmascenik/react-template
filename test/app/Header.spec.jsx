var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE)

describe('Header', () => {
  var Header = require('../../src/app/Header.jsx')

  it('renders expected text', () => {
    jsx.assertRender(Header, {}, 'Your Name Here')
  })
})
