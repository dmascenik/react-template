import React from 'react'
import ReactDOM from 'react-dom'

/*
 * Routing configuration makes single-page apps behave like multi-page apps in
 * a browser by mapping URLs to view components. This allows users to navigate
 * the app using the browser's forward and back buttons, and also to bookmark
 * a specific location in the app.
 */
import { Router, IndexRoute, Route } from 'react-router'
import history from './history'

import MasterFrame from './app/MasterFrame.jsx'
import Home from './app/Home.jsx'
import Settings from './app/Settings.jsx'
import ChatControllerView from './app/ChatControllerView.jsx'

// Makes tap events work in Material UI for React pre-1.0
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

/* **************************************************************************
 *
 * APPLICATION ROUTE CONFIGURATION
 *
 * Note the use of createBrowserHistory(). This prevents the use of #'s in
 * the URL, but is not compatible with older versions of IE.
 *
 * Also note that the server must be configured to serve our index.html
 * from any URL configured below in case the user hits the refresh button.
 *
 **************************************************************************/
ReactDOM.render((
  <Router history={history}>
    <Route component={MasterFrame}
        path="/" >
      <IndexRoute component={Home}/>
      <Route component={Settings}
          path="settings" />
      <Route component={ChatControllerView}
          path="chat" />
    </Route>
  </Router>
), document.getElementById('app'))
