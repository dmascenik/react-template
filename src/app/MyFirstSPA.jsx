import Radium from 'radium'
import React from 'react'
import Avatar from 'material-ui/lib/avatar'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import HelloWorld from '../components/HelloWorld.jsx'

/**
 * Here's a straightforward, full-screen React component with a header and
 * some callback functions attached to icons.
 */
let MyFirstSPA = class MyFirstSPA extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      pageTwo: false
    }

    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick () {
    this.setState({pageTwo: !this.state.pageTwo})
  }

  render () {
    var PageTwoButton = (<RaisedButton label="Go to Page Two"
        onTouchTap={this.handleLinkClick} />)

    var PageOneButton = (<RaisedButton label="Back to Page One"
        onTouchTap={this.handleLinkClick} />)

    return (<Paper style={{'height': '100%'}}>
      <Paper>
      <Toolbar>
        <ToolbarGroup firstChild
            float="left">
          <IconMenu iconButtonElement={
            <IconButton touch >
              <FontIcon className="material-icons">{'dehaze'}</FontIcon>
            </IconButton>
          }>
            <MenuItem primaryText="Yesterday" />
            <MenuItem primaryText="Today" />
            <MenuItem primaryText="Tomorrow" />
          </IconMenu>
          <IconButton><FontIcon className="material-icons">{'home'}</FontIcon></IconButton>
        </ToolbarGroup>
        <ToolbarGroup float="right"
            lastChild >
          <ToolbarTitle text="Your Name Here" />
          <Avatar>{'X'}</Avatar>
          <IconMenu iconButtonElement={
            <IconButton touch >
              <FontIcon className="material-icons">{'more_vert'}</FontIcon>
            </IconButton>
          }>
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign Out" />
          </IconMenu>
      </ToolbarGroup>
    </Toolbar>
    </Paper>
    <Paper style={{'height': '100%'}}>
      <center>
        <div style={[this.state.pageTwo && {'display': 'none'}, {'width': '60%'}]}>
          <Paper style={{'height': '100%'}}>
            <CardMedia overlay={<CardTitle subtitle="A React app in a single JSX file"
                title="Hello World" />}>
              <img src="http://lorempixel.com/600/337/nature/"/>
            </CardMedia>
            <CardTitle subtitle="Try clicking on some of the icons in the header, too"
                title={PageTwoButton} />
            {'Notice that clicking on Hello World still works as before, too'}
            <br/><br/>
            <HelloWorld style={{'color': 'blue', 'fontSize': '50px', 'fontFamily': 'Times'}} />
          </Paper>
        </div>
        <div style={[!this.state.pageTwo && {'display': 'none'}, {'width': '60%'}]}>
          <Paper style={{'height': '100%'}}>
            <br/><br/>
            <h2>{'Goodbye World!'}</h2>
            <CardTitle title={PageOneButton} />
          </Paper>
        </div>
      </center>
    </Paper>
    </Paper>)
  }

}
MyFirstSPA.displayName = 'MyFirstSPA'
MyFirstSPA = Radium(MyFirstSPA)
export default MyFirstSPA
