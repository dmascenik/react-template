import Radium from 'radium'
import React from 'react'
import CardTitle from 'material-ui/lib/card/card-title'
import Avatar from 'material-ui/lib/avatar'
import Paper from 'material-ui/lib/paper'
import BuddyList from '../components/BuddyList'
import ReceiveMessageButton from '../components/ReceiveMessageButton'

import MessageStore from '../flux/store/MessageStore'
import BuddyStore from '../flux/store/BuddyStore'

import ChatActionCreator from '../flux/action/ChatActionCreator'

let ChatControllerView = class ChatControllerView extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedBuddyId: -1,
      totalUnreadCount: MessageStore.getTotalUnreadCount()
    }
    this.onUpdateSelectedBuddyId = this.onUpdateSelectedBuddyId.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    MessageStore.addChangeListener(this.onChange)
  }

  componentWillUnmount () {
    MessageStore.removeChangeListener(this.onChange)
  }

  onUpdateSelectedBuddyId (e, id) {
    ChatActionCreator.viewMessages(id)
  }

  onChange () {
    this.setState({
      selectedBuddyId: MessageStore.getSelectedBuddyId(),
      totalUnreadCount: MessageStore.getTotalUnreadCount()
    })
  }

  getBuddyListData () {
    var data = []
    var ids = BuddyStore.getBuddyIds()
    for (var i = 0; i < ids.length; i++) {
      var id = ids[i]
      var buddy = {
        id: parseInt(id, 10),
        name: BuddyStore.getBuddyName(id),
        unreadCount: MessageStore.getUnreadCount(id)
      }
      data.push(buddy)
    }
    return data
  }

  render () {
    return (<Paper style={{'height': '100%'}}>
            <br/>
            <CardTitle title="Chat" />
            {'Total Unread: '}<Avatar backgroundColor="red">{this.state.totalUnreadCount}</Avatar>
            <br/><br/>
            <Paper style={{'width': '80%', 'textAlign': 'left', 'overflow': 'auto'}}>
              <div style={{'display': 'inline-block', 'width': '120px'}}>
                <BuddyList
                    data={this.getBuddyListData()}
                    selectBuddy={this.onUpdateSelectedBuddyId}
                    selectedBuddyId={this.state.selectedBuddyId} />
              </div>
              <div style={{'float': 'right', 'padding': '20px'}}>
                <ReceiveMessageButton
                    id={12}
                    name="Dan"
                    tapHandler={ChatActionCreator.receiveIncomingMessage}
                    tapHandlerContext={ChatActionCreator} />
                <br/><br/>
                <ReceiveMessageButton
                    id={23}
                    name="Jane"
                    tapHandler={ChatActionCreator.receiveIncomingMessage}
                    tapHandlerContext={ChatActionCreator} />
                <br/><br/>
                <ReceiveMessageButton
                    id={45}
                    name="Ann"
                    tapHandler={ChatActionCreator.receiveIncomingMessage}
                    tapHandlerContext={ChatActionCreator} />
              </div>
            </Paper>
            </Paper>)
  }

}
ChatControllerView.displayName = 'ChatControllerView'
ChatControllerView = Radium(ChatControllerView)
export default ChatControllerView
