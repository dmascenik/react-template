var Promise = require('es6-promise').Promise
var assign = require('object-assign')

var _callbacks = []

var Dispatcher = function () {}
Dispatcher.prototype = assign({}, Dispatcher.prototype, {

  /**
   * Register a Store's callback so that it may be invoked by an action.
   * @param {function} callback The callback to be registered.
   * @return {number} The index of the callback within the _callbacks array.
   */
  register: function (callback) {
    _callbacks.push(callback)
    return _callbacks.length - 1 // index
  },

  /**
   * Clears all the registered callbacks
   */
  unregisterAll: function () {
    _callbacks = []
  },

  /**
   * Dispatch the action to registered callbacks
   * @param  {object} payload The data from the action.
   */
  dispatch: function (payload) {
    /*
     * Store references to Promise resolve/reject functions for each callback
     * so that callbacks can succeed/fail independently. Otherwise, a failing
     * callback would call all subsequent callbacks to fail. Since the
     * registration order of callbacks may vary, this would cause
     * unpredictable behaviors.
     */
    var resolves = []
    var rejects = []
    _callbacks.map(function (_, i) {
      return new Promise(function (resolve, reject) {
        resolves[i] = resolve
        rejects[i] = reject
      })
    })

    // Call each of the callback functions
    _callbacks.forEach(function (callback, i) {
      Promise.resolve(callback(payload)).then(function () {
        // success of callback i
        resolves[i](payload)
      }, function () {
        // failure of callback i
        rejects[i](new Error('Dispatcher callback unsuccessful'))
      })
    })
  }
})

module.exports = Dispatcher
