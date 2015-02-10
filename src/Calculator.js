/**
 * Created by juan on 2/10/2015.
 */
"use strict";

var Calculator = (function(){

    var add = function(num1, num2){
        return num1 + num2;
    };

    return {
        add: add
    }
}());