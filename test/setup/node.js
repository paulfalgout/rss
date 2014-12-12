var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiJquery = require('chai-jquery');
var requireHelper = require('./require-helper');

global.sinon = sinon;
global.expect = chai.expect;

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
global._ = require('underscore');
global.Backbone = require('backbone');
global.Backbone.$ = global.$;
global.Marionette = require('backbone.marionette');


chai.use(sinonChai);
chai.use(chaiJquery);

// require app files
requireHelper('add');
requireHelper('multiply');


