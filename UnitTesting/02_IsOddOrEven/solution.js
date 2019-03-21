
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
  
    return "odd";
  }
  
  let expect = require('chai').expect;
  let assert = require('chai').assert;
  describe('isOddOrEven',function(){
      it('with a number parameter should return undefined', function() {
      expect(isOddOrEven(13)).to.equal(undefined,
        'Function did not return the correct result!')
      });

      it('with an object parameter should return undefined',function(){
          expect(isOddOrEven({name:'Pesho'})).to.equal(undefined,
            'Function did not return the correct result!')
      });
      
      it('with an even length string parameter should return undefined',function(){
          assert.equal(isOddOrEven('roar'),'even',
          'Function returned the correct result!');
      });
          
      it('with an odd length string parameter should return undefined',function(){
        assert.equal(isOddOrEven('pesho'),'odd',
        'Function returned the correct result!');
    });

  });


