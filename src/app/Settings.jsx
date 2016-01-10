import Radium from 'radium'
import React from 'react'
import CardTitle from 'material-ui/lib/card/card-title'
import Paper from 'material-ui/lib/paper'

let Settings = class Settings extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (<Paper style={{'height': '100%'}}>
            <br/><br/>
            <CardTitle title="Settings Page" />
          </Paper>)
  }

}
Settings.displayName = 'Settings'
Settings = Radium(Settings)
export default Settings
