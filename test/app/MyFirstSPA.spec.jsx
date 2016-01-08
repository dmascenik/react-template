var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE)

describe('MyFirstSPA', () => {
  var MyFirstSPA = require('../../src/app/MyFirstSPA.jsx')

  it('renders something containing Hello World', () => {
    jsx.assertRender(MyFirstSPA, {}, 'Hello World')
  })
})
