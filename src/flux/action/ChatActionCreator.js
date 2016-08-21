var dispatcher = require('../dispatcher')
var constants = require('../constants/ChatConstants')

var ChatActionCreator = {

  receiveIncomingMessage: function (fromId, message) {
    dispatcher.handleViewAction(
      this._getIncomingMessageAction(fromId, message)
    )
  },

  viewMessages: function (fromId) {
    dispatcher.handleViewAction(
      this._getViewMessagesAction(fromId)
    )
  },

  /**
   * Action object creators. These are exposed for unit
   * testing purposes, but should not be accessed from
   * outside the module, hence the _ prefix.
   */

  _getIncomingMessageAction: function (fromId, message) {
    return {
      actionType: constants.INCOMING_MESSAGE,
      fromId: fromId,
      message: message
    }
  },

  _getViewMessagesAction: function (fromId) {
    return {
      actionType: constants.VIEW_MESSAGES,
      fromId: fromId
    }
  }
}
module.exports = ChatActionCreator
