var chat = require('../../../src/flux/action/ChatActionCreator')
var assert = require('assert')
var sinon = require('sinon')
var dispatcher = require('../../../src/flux/dispatcher')
var constants = require('../../../src/flux/constants/ChatConstants')

describe('ChatActionCreator', () => {
  var sandbox
  var spy = sinon.spy(dispatcher, 'handleViewAction')

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('sends incoming message and fromId to dispatcher with correct actionType', () => {
    chat.receiveIncomingMessage(123, 'hello')
    var action = spy.lastCall.args[0]
    assert.equal(action.fromId, 123)
    assert.equal(action.message, 'hello')
    assert.equal(action.actionType, constants.INCOMING_MESSAGE)
  })

  it('sends fromId to view and correct actionType to dispatcher', () => {
    chat.viewMessages(123)
    var action = spy.lastCall.args[0]
    assert.equal(action.fromId, 123)
    assert.equal(action.actionType, constants.VIEW_MESSAGES)
  })
})
