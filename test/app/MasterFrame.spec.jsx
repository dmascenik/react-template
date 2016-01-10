var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE)

describe('MasterFrame', () => {
  var MasterFrame = require('../../src/app/MasterFrame.jsx')

  it('renders child element', () => {
    jsx.assertRender(MasterFrame, {children: '<span>child text</span>'}, 'child text')
  })
})
