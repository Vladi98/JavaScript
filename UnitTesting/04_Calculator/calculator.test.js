const Calculator = require('./calculator');
const assert = require('chai').assert;

describe('Calculator',function(){
    let calculator;
    beforeEach(function(){
        calculator = new Calculator();
    })
    it('Contains a property expenses that is initialized to an empty array',function(){
        let arr=[];
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    })

    describe('Function add(data) – adds the passed in item (of any type) to the expenses.',function(){
        let item = 4;
        it('Add data',function(){
            calculator.add(5);
            calculator.add('sasd');
            calculator.add(4.5);
            calculator.add(true)
            
            assert.deepEqual(calculator.expenses,[5,'sasd',4.5,true])

        })
    });

    describe('Function divideNums() – divides only the numbers from the expenses  and returns the result.',function(){
        it('Should be 2',function(){
            calculator.add(100);
            calculator.add(50);

            assert.equal(calculator.divideNums(),2)
        })

        it('no numbers in the array',function(){
             calculator.add('ivan');
             calculator.add(true);

             assert.throw(function(){calculator.divideNums()},"There are no numbers in the array!" )
        })
    })
 
    describe('Function toString()', function() {
        it('standard', function() {
            calculator.add(10);
            calculator.add('Pesho');
            calculator.add(5);

            assert.equal(calculator.toString(), '10 -> Pesho -> 5');
        });

        it('one input', function() {
            calculator.add(1);

            // assert.strictEqual(calculator.toString(), '1');
            assert.equal(calculator.toString(), '1');
        });

        it('no input', function() {
            assert.equal(calculator.toString(), 'empty array');
        });
    });

    describe("Function orderBy() – returns a string joined with , which is the sorted expenses, sorting them by two criteria - one for numbers and another for mixed data.",function(){
       
        it("should return sorted items",function(){
            calculator.add(4);
            calculator.add(12);
            calculator.add(1);
            calculator.add(5);
            
            assert.equal(calculator.orderBy(),"1, 4, 5, 12");
        })

        it("shuld return sorted mixed items",function(){
            calculator.add("ivan");
            calculator.add("aesho");
            calculator.add(5);


            assert.equal(calculator.orderBy(),"5, aesho, ivan")

        })
    })
})