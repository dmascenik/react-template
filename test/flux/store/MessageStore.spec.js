var chat = require('../../../src/flux/action/ChatActionCreator')
var assert = require('assert')
var sinon = require('sinon')

describe('MessageStore', () => {
  var sandbox
  var dispatcher
  var MessageStore
  var callback

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    dispatcher = require('../../../src/flux/dispatcher')

    // unload the MessageStore loaded in any other test
    var name = require.resolve('../../../src/flux/store/MessageStore')
    delete require.cache[name]

    if (!callback) {
      var spy = sinon.spy(dispatcher, 'register')
      MessageStore = require('../../../src/flux/store/MessageStore')
      callback = spy.lastCall.args[0]
    }
  })

  afterEach(() => {
    callback({action: {actionType: 'CLEAR_ALL'}})
    dispatcher.unregisterAll()
    sandbox.restore()
  })

  it('has a dispatcher index', () => {
    // only one registered, so should be 0
    assert(MessageStore.dispatcherIndex === 0)
  })

  it('defaults to empty array of messages', () => {
    assert(MessageStore.getMessages(1234))
    assert(MessageStore.getMessages(1234).length === 0)
  })

  it('initializes with selectedBuddyId undefined', () => {
    assert(!MessageStore.getSelectedBuddyId())
  })

  it('fires an event after handling an incoming message', (done) => {
    var listener = function () {
      done()
    } // verifies an event was fired
    MessageStore.addChangeListener(listener)
    var action = chat._getIncomingMessageAction(1234, 'message from 1234')
    callback({action: action})
    MessageStore.removeChangeListener(listener)
  })

  it('fires an event after handling a view messages action', (done) => {
    var listener = function () {
      done()
    } // verifies an event was fired
    MessageStore.addChangeListener(listener)
    var action = chat._getViewMessagesAction(1234)
    callback({action: action})
    MessageStore.removeChangeListener(listener)
  })

  it('returns first posted message', () => {
    var action = chat._getIncomingMessageAction(1, 'm')
    callback({action: action})
    var msgs = MessageStore.getMessages(1)
    assert(msgs.length === 1)
    assert(msgs[0] === 'm')
  })

  it('appends additional messages', () => {
    var action1 = chat._getIncomingMessageAction(2, 'first')
    var action2 = chat._getIncomingMessageAction(2, 'second')
    callback({action: action1})
    callback({action: action2})
    var msgs = MessageStore.getMessages(2)
    assert(msgs.length === 2)
    assert(msgs[0] === 'first')
    assert(msgs[1] === 'second')
  })

  it('id is not dirty if never received a message', () => {
    assert(!MessageStore.isDirty(3))
  })

  it('id is dirty after a message is received', () => {
    assert(!MessageStore.isDirty(4))
    var action = chat._getIncomingMessageAction(4, 'm')
    callback({action: action})
    assert(MessageStore.isDirty(4))
  })

  it('id is not dirty after messages viewed', () => {
    var action = chat._getIncomingMessageAction(5, 'm')
    callback({action: action})
    assert(MessageStore.isDirty(5))
    action = chat._getViewMessagesAction(5)
    callback({action: action})
    assert(!MessageStore.isDirty(5))
  })

  it('returns selected buddyId', () => {
    var action = chat._getViewMessagesAction(5)
    callback({action: action})
    assert.equal(MessageStore.getSelectedBuddyId(), 5)
  })

  it('returns zero unread from one buddy when no messages received', () => {
    assert(MessageStore.getUnreadCount(6) === 0)
  })

  it('returns count of unread messages from one buddy', () => {
    var action = chat._getIncomingMessageAction(7, 'm')
    callback({action: action})
    assert(MessageStore.getUnreadCount(7) === 1)
  })

  it('unread is zero after viewing from one buddy', () => {
    var action = chat._getIncomingMessageAction(8, 'm')
    callback({action: action})
    assert(MessageStore.getUnreadCount(8) === 1)
    action = chat._getViewMessagesAction(8)
    callback({action: action})
    assert(MessageStore.getUnreadCount(8) === 0)
  })

  it('does not increment unread count for selected buddy', () => {
    var action = chat._getViewMessagesAction(8)
    callback({action: action})
    assert.equal(MessageStore.getUnreadCount(8), 0)
    action = chat._getIncomingMessageAction(8, 'm')
    callback({action: action})
    assert.equal(MessageStore.getUnreadCount(8), 0)
  })

  it('returns zero total messages when no messages received', () => {
    assert(MessageStore.getTotalUnreadCount() === 0)
  })

  it('returns total count of unread messages', () => {
    callback({action: chat._getIncomingMessageAction(1234, 'm')})
    callback({action: chat._getIncomingMessageAction(2345, 'm')})
    assert(MessageStore.getTotalUnreadCount() === 2)
  })

  it('decreases total unread after viewing from one buddy', () => {
    callback({action: chat._getIncomingMessageAction(1234, 'm')})
    callback({action: chat._getIncomingMessageAction(2345, 'm')})
    assert(MessageStore.getTotalUnreadCount() === 2)
    callback({action: chat._getViewMessagesAction(1234)})
    assert(MessageStore.getTotalUnreadCount() === 1)
  })
})
