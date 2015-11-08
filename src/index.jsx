import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld.jsx';

/*
 * Look at the style attribute in HelloWorld.jsx's render() function to
 * understand why the fontSize is overridden from here, but the 
 * fontFamily is not - or why the color doesn't override the bold/red
 * style.
 */
ReactDOM.render(<HelloWorld style={
    {
      "fontSize": "50px", 
      "color": "blue", 
      "fontFamily": "Times"
    }
  } />, 
  document.getElementById('app')); // <-- see static/index.html