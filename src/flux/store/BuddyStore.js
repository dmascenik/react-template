/**
 * Just a static list of buddies
 */
var rawBuddies = [
  {id: 12, displayName: 'Dan'},
  {id: 23, displayName: 'Jane'},
  {id: 34, displayName: 'Jim'},
  {id: 45, displayName: 'Ann'},
  {id: 56, displayName: 'Bill'}
]

/**
 * Transform it into something like a map
 * for easier access later
 */
var buddies = []
rawBuddies.forEach(function (buddy, i) {
  buddies[buddy.id] = buddy
})

/**
 * This store is NOT based on the EventEmitter
 * prototype because there are no buddy actions
 */
var BuddyStore = {
  getBuddyIds: function () {
    return Object.keys(buddies)
  },

  getBuddyName: function (id) {
    return buddies[id].displayName
  }
}
module.exports = BuddyStore
