// var requireHelper = require('./require-helper');

// simulate browser
if (!global.document || !global.window) {
  var jsdom = require('jsdom').jsdom;

  global.document = jsdom('<html><head><script></script></head><body></body></html>', null, {
    FetchExternalResources   : ['script'],
    ProcessExternalResources : ['script'],
    MutationEvents           : '2.0',
    QuerySelector            : false
  });

  global.window = document.createWindow();
  global.navigator = global.window.navigator;
}


// add globals, libs
global.$ = global.jQuery = require('jquery');

var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiJquery = require('chai-jquery');

chai.use(sinonChai);
chai.use(chaiJquery);

global.sinon = sinon;
global.expect = chai.expect;

// require app files
// requireHelper('add');
// requireHelper('multiply');
