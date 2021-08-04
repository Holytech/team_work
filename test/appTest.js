const assert = require('chai').assert;
const addNumber = require('../test').addNumber;

describe ('Test', function(){
    it('test should return 4', function(){
        let result = addNumber();
        assert.equal(result, 4);
    });
});