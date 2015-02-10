/**
 * Created by juan on 2/10/2015.
 */
"use strict";


describe("Calculator tests", function(){

    it("Add gives the correct result", function(){

        // setup
        var num1 = 10;
        var num2 = 5;
        var expectedResult = 15;

        // Call the function
        var result = Calculator.add(num1, num2);

        // Assertions
        expect(result).to.be.equal(expectedResult);
    });

    it("Add give the correct result with negative numbes", function(){

        var num1 = -1;
        var num2 = -3;
        var expectedResult = -4;

        var result = Calculator.add(num1, num2);

        expect(result).to.be.equal(expectedResult);


    })

});