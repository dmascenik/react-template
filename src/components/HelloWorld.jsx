import React from 'react';
import Radium from 'radium';

var styles = {
  basic: {
    fontFamily: "Arial"
  },
  fancy: {
    color: "red",
    fontWeight: "bold"
  }
};

class HelloWorld extends React.Component {
  
  constructor(props) {
    super(props);

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
    this.onClick = this.onClick.bind(this);
  }

  /**
   * onClick just toggles the "fancy" boolean in the state. Notice that you
   * must use this.setState. Setting this.state directly will not trigger
   * re-rendering.
   */
  onClick() {
    this.setState({ fancy: !this.state.fancy });
  }

  render() {

    /*
     * Note that by putting any styles coming in from props first, we can
     * ensure that the later styles can't be overridden.
     */
    return (
      <div style={[styles.basic, 
        this.props.style && this.props.style,
        this.state.fancy && styles.fancy]} 
        onClick={this.onClick}>Hello World!</div>
    );
  }

};

/**
 * Do some basic property type checking
 */
HelloWorld.propTypes = {
  style:    React.PropTypes.object
};

HelloWorld = Radium(HelloWorld);
export default HelloWorld;