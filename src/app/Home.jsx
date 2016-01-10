import Radium from 'radium'
import React from 'react'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import Paper from 'material-ui/lib/paper'
import HelloWorld from '../components/HelloWorld.jsx'

let Home = class Home extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (<Paper style={{'height': '100%'}}>
      <CardMedia overlay={<CardTitle subtitle="A React app in a single JSX file"
          title="Hello World" />}>
        <img src="http://lorempixel.com/600/337/nature/"/>
      </CardMedia>
      <CardTitle subtitle="Try clicking on some of the icons in the header, too"
          title="Home Page" />
      {'Notice that clicking on Hello World still works as before, too'}
      <br/><br/>
      <HelloWorld style={{'color': 'blue', 'fontSize': '50px', 'fontFamily': 'Times'}} />
    </Paper>)
  }

}
Home.displayName = 'Home'
Home = Radium(Home)
export default Home
