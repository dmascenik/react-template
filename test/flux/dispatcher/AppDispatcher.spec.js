var AppDispatcher = require('../../../src/flux/dispatcher')
var assert = require('assert')

/**
 * This simple test suite provides line coverage but not complete functional
 * coverage. There are plenty of degenerate cases that are not tested.
 */
describe('AppDispatcher', () => {
  afterEach(() => {
    AppDispatcher.unregisterAll()
  })

  it('can register without failing', () => {
    AppDispatcher.register(function () {})
  })

  it('dispatches to a successful callback', (done) => {
    var executed = false
    AppDispatcher.register(function () {
      executed = true
      done()
    })
    AppDispatcher.handleViewAction({})
    assert(executed)
  })
})
