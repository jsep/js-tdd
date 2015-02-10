/**
 * Created by juan on 2/10/2015.
 */
/// <reference path="counter.js"/>
"use strict";


describe("Counter tests", function(){

    it("Add gives the correct result", function(){

        var num1 = 1;
        var num2 = 3;
        var expected = 4;

        var result = Calculator.add(num1, num2);
        expect(result).toBe(expected);
    });

    it("Subtract gives the correct result", function(){

        var num1 = 2;
        var num2 = 3;
        var expected = -1;

        var result = Calculator.subtract(num1, num2);
        expect(result).toBe(expected);

    })

})