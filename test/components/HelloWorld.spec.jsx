var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE);
var assert = require('assert');
var ReactDOM = require('react-dom');

describe('HelloWorld', () => {
    var HelloWorld = require('../../src/components/HelloWorld.jsx');

    it('#render', () => {
      jsx.assertRender(HelloWorld, {}, 'Hello World!');
    });

    it('Renders with Arial font', () => {
      var hello = jsx.renderComponent(HelloWorld, {});
      assert.equal(ReactDOM.findDOMNode(hello).style.fontFamily, "Arial");
    });

});