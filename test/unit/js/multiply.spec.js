var multiply = require('../../../src/js/multiply.js');

describe('Multiply', function() {
  'use strict';

  describe('#multiply()', function(){
    it('should multiply two numbers', function(){
        var results = multiply(2,2);

        expect(results).to.equal(4);
    });
  });

});
