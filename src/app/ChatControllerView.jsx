import Radium from 'radium'
import React from 'react'
import CardTitle from 'material-ui/lib/card/card-title'
import Paper from 'material-ui/lib/paper'

let ChatControllerView = class ChatControllerView extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (<Paper style={{'height': '100%'}}>
            <br/><br/>
            <CardTitle title="Chat" />
          </Paper>)
  }

}
ChatControllerView.displayName = 'ChatControllerView'
ChatControllerView = Radium(ChatControllerView)
export default ChatControllerView
