var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE)

describe('ChatControllerView', () => {
  var ChatControllerView = require('../../src/app/ChatControllerView.jsx')

  it('renders expected text', () => {
    jsx.assertRender(ChatControllerView, {}, 'Chat')
  })
})
