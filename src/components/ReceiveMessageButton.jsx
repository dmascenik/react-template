import Radium from 'radium'
import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'

let ReceiveMessageButton = class ReceiveMessageButton extends React.Component {

  constructor (props) {
    super(props)
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  handleTouchTap () {
    // Using the "call" method to provide an explicit invocation
    // context since the tapHandler function passed in may use "this"
    this.props.tapHandler.call(this.props.tapHandlerContext, this.props.id, 'message')
  }

  render () {
    return (
      <RaisedButton
          label={'+1 Message from ' + this.props.name}
          onTouchTap={this.handleTouchTap} />
    )
  }
}
ReceiveMessageButton.displayName = 'ReceiveMessageButton'
ReceiveMessageButton.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  tapHandler: React.PropTypes.func.isRequired,
  tapHandlerContext: React.PropTypes.object.isRequired
}
ReceiveMessageButton = Radium(ReceiveMessageButton)
export default ReceiveMessageButton
