var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE)

describe('Home', () => {
  var Home = require('../../src/app/Home.jsx')

  it('renders something that contains Hello World', () => {
    jsx.assertRender(Home, {}, 'Hello World!')
  })
})
