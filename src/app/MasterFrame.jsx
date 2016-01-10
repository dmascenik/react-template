import Radium from 'radium'
import React from 'react'
import Paper from 'material-ui/lib/paper'
import Header from './Header.jsx'

let MasterFrame = class MasterFrame extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (<Paper style={{'height': '100%'}}>
      <Header />
      <Paper style={{'height': '100%'}}>
        <center>
          <div style={{'width': '60%'}}>
            {this.props.children}
          </div>
        </center>
      </Paper>
    </Paper>)
  }

}
MasterFrame.propTypes = {
  children: React.PropTypes.node
}
MasterFrame.displayName = 'MasterFrame'
MasterFrame = Radium(MasterFrame)
export default MasterFrame
