import Radium from 'radium'
import React from 'react'
import Avatar from 'material-ui/lib/avatar'
import FontIcon from 'material-ui/lib/font-icon'
import history from '../history'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Paper from 'material-ui/lib/paper'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'

let Header = class Header extends React.Component {

  constructor (props) {
    super(props)

    this.handleSettingsTouchTap = this.handleSettingsTouchTap.bind(this)
    this.handleHomeTouchTap = this.handleHomeTouchTap.bind(this)
  }

  handleSettingsTouchTap () {
    history.pushState(null, '/settings')
  }

  handleHomeTouchTap () {
    history.pushState(null, '/')
  }

  render () {
    return (<Paper>
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
          <IconButton onTouchTap={this.handleHomeTouchTap}>
            <FontIcon className="material-icons">{'home'}</FontIcon>
          </IconButton>
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
            <MenuItem onTouchTap={this.handleSettingsTouchTap}
                primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign Out" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    </Paper>)
  }
}
Header.displayName = 'Header'
Header = Radium(Header)
export default Header
