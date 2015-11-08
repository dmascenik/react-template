var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE);
var assert = require('assert');
var ReactDOM = require('react-dom');

describe('HelloWorld', () => {
    var HelloWorld = require('../../src/components/HelloWorld.jsx');
    var hello;

    afterEach(() => {
      if (hello) {
        jsx.unmountComponent(hello);
      }
    })

    it('#render', () => {
      jsx.assertRender(HelloWorld, {}, 'Hello World!');
    });

    it('Renders with Arial font', () => {
      hello = jsx.renderComponent(HelloWorld, {});
      assert.equal(ReactDOM.findDOMNode(hello).style.fontFamily, "Arial");
    });

    it('Accepts style override', () => {
      hello = jsx.renderComponent(HelloWorld, {style: {"color": "blue"}});
      assert.equal(ReactDOM.findDOMNode(hello).style.color, "blue");
    });

    it('Turns red on click', () => {
      hello = jsx.renderComponent(HelloWorld, {});
      assert(!ReactDOM.findDOMNode(hello).style.color, "Unexpected color in style");
      jsx.simulateEvent(hello, 'click');
      assert.equal(ReactDOM.findDOMNode(hello).style.color, "red");
      jsx.simulateEvent(hello, 'click');
      assert(!ReactDOM.findDOMNode(hello).style.color, "Color should have been cleared");
    });

});