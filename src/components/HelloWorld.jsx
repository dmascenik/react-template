import React from 'react'
import Radium from 'radium'

var styles = {
  basic: {
    fontFamily: 'Arial'
  },
  fancy: {
    color: 'red',
    fontWeight: 'bold'
  }
}

let HelloWorld = class HelloWorld extends React.Component {

  constructor (props) {
    super(props)

    /*
     * This makes HelloWorld a stateful component. When this.state
     * is changed via this.setState(...), the component will re-render.
     */
    this.state = {
      fancy: false
    }

    /*
     * onClick function must be bound to work
     */
    this.handleClick = this.handleClick.bind(this)
  }

  /**
   * onClick just toggles the "fancy" boolean in the state. Notice that you
   * must use this.setState. Setting this.state directly will not trigger
   * re-rendering.
   */
  handleClick () {
    this.setState({ fancy: !this.state.fancy })
  }

  render () {
    /*
     * Note that by putting any styles coming in from props first, we can
     * ensure that the later styles can't be overridden.
     */
    return (
      <div onClick={this.handleClick}
          style={[styles.basic,
          this.props.style && this.props.style,
          this.state.fancy && styles.fancy]}>{'Hello World!'}</div>
    )
  }

}
HelloWorld.displayName = 'HelloWorld'

/**
 * Do some basic property type checking
 */
HelloWorld.propTypes = {
  style: React.PropTypes.shape({'*': React.PropTypes.string})
}

HelloWorld = Radium(HelloWorld)
export default HelloWorld
