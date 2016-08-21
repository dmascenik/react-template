var BuddyStore = require('../../../src/flux/store/BuddyStore')
var assert = require('assert')

describe('BuddyStore', () => {
  it('returns the ids', () => {
    var ids = BuddyStore.getBuddyIds()
    assert(ids.length === 5)
  })

  it('returns displayName for an id', () => {
    assert(BuddyStore.getBuddyName(12) === 'Dan')
  })
})
