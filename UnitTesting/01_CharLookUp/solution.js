function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const assert = require('chai').assert;

describe('lookupChar',function() {
    it('with first parameter no string should return undefined',function() {
        assert.equal(lookupChar(13,0),undefined);
    });

    it('with second parameter no number should return undefined',function() {
        assert.equal(lookupChar('pesho','pesho'),undefined);
    });

    
    it('with second parameter floating-point number should return undefined',function() {
        assert.equal(lookupChar('pesho',3.14),undefined);
    });

    it('with incorrect index should return undefined',function() {
        assert.equal(lookupChar('pesho',13),'Incorrect index');
    });

    it('with incorrect index should return undefined',function() {
        assert.equal(lookupChar('pesho',4),'Incorrect index');
    });

    it('with incorrect index should return undefined',function() {
        assert.equal(lookupChar('pesho',-1),'Incorrect index');
    });

    it('with both values in correct type',function() {
        assert.equal(lookupChar('pesho',3),'h');
    });
})