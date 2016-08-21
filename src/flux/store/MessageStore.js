var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var dispatcher = require('../dispatcher')
var constants = require('../constants/ChatConstants')

var CHANGE_EVENT = 'messageChange'
var messages = []
var selectedBuddyId

/**
 * All the message state management in one place!
 */
var MessageStore = assign({}, EventEmitter.prototype, {
  getMessages: function (id) {
    var msgs = []
    if (messages[id]) {
      msgs = messages[id].data
    }
    return msgs
  },

  isDirty: function (id) {
    return (messages[id] && messages[id].dirty)
  },

  getUnreadCount: function (id) {
    var unread = 0
    if (messages[id]) {
      unread = (messages[id].data.length - 1) - messages[id].lastRead
    }
    return unread
  },

  getTotalUnreadCount: function () {
    var unread = 0
    messages.forEach(function (msg, i) {
      unread += ((msg.data.length - 1) - msg.lastRead)
    })
    return unread
  },

  getSelectedBuddyId: function () {
    return selectedBuddyId
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  dispatcherIndex: dispatcher.register(function (payload) {
    var action = payload.action

    switch (action.actionType) {
      case constants.INCOMING_MESSAGE:
        if (!messages[action.fromId]) {
          // first message from this id
          messages[action.fromId] = {
            data: [action.message],
            dirty: true,
            lastRead: -1
          }
        } else {
          messages[action.fromId].data.push(action.message)
          messages[action.fromId].dirty = true
        }
        if (action.fromId === selectedBuddyId) {
          messages[action.fromId].dirty = false
          messages[action.fromId].lastRead = messages[action.fromId].data.length - 1
        }
        MessageStore.emitChange()
        break

      case constants.VIEW_MESSAGES:
        if (messages[action.fromId]) {
          messages[action.fromId].dirty = false
          messages[action.fromId].lastRead = messages[action.fromId].data.length - 1
        }
        selectedBuddyId = action.fromId
        MessageStore.emitChange()
        break

      case 'CLEAR_ALL': // for unit tests
        messages = []
        break
    }

    // needed for the promise in the dispatcher to indicate no errors
    return true
  })
})
module.exports = MessageStore
