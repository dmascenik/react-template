import React from 'react';
import Radium from 'radium';

var styles = {
  basic: {
    fontFamily: "Arial"
  }
};

class HelloWorld extends React.Component {

  render() {
    return (
      <div style={styles.basic}>Hello World!</div>
    );
  }

}
HelloWorld = Radium(HelloWorld);
export default HelloWorld;