var jsx = require('jsx-test').jsxTranspile(process.env.COVERAGE);

describe('HelloWorld', () => {
    var HelloWorld = require('../../src/components/HelloWorld.jsx');

    it('#render', () => {
       jsx.assertRender(HelloWorld, {}, 'Hello World!');
    });
});