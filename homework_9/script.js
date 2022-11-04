'use strict'

function makeFibonacciFunction() {
    let f0 = 1;
    let f1 = -1;
    return function() {
        let f = f0 + f1;
        f1 = f0;
        f0 = f;
        console.log(f);
    }
}   

const fibonacci = makeFibonacciFunction();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();



