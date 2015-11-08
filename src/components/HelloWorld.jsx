import React from 'react';
import Radium from 'radium';

var styles = {
  basic: {
    fontFamily: "Arial"
  }
};

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    /*
     * Note that by putting any styles coming in from props first, we can
     * ensure that the later styles can't be overridden.
     */
    return (
      <div style={[
        this.props.style && this.props.style,
        styles.basic]}>Hello World!</div>
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