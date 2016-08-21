import Radium from 'radium'
import React from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'
import SelectableContainerEnhance from 'material-ui/lib/hoc/selectable-enhance'
var SelectableList = SelectableContainerEnhance(List)

let BuddyList = class BuddyList extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    var listItems = []
    for (var i = 0; i < this.props.data.length; i++) {
      var buddy = this.props.data[i]
      var extraProps = {}
      var count = buddy.unreadCount
      if (count > 0) {
        if (count > 9) {
          count = '9+'
        }
        extraProps.rightAvatar = (
          <Avatar
              backgroundColor="red"
              size={20}>
            {count}
          </Avatar>
        )
      }
      listItems.push(
        <ListItem
            key={buddy.id}
            primaryText={buddy.name}
            value={buddy.id}
            {...extraProps} />
      )
    }

    return (<SelectableList subheader="Buddy List"
        valueLink={{
          value: this.props.selectedBuddyId,
          requestChange: this.props.selectBuddy
        }}>
        {listItems}
      </SelectableList>
    )
  }

}
BuddyList.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      unreadCount: React.PropTypes.number.isRequired
    })).isRequired,
  selectBuddy: React.PropTypes.func.isRequired,
  selectedBuddyId: React.PropTypes.number
}
BuddyList.displayName = 'BuddyList'
BuddyList = Radium(BuddyList)
export default BuddyList
