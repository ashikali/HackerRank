'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function isFactor(a,b){

	return a%b === 0;
}

function getTotalX(a, b) {
    // Write your code here

    var factors = [];
    a.sort;b.sort;
    for(var i=a.length-1;i<100;i++){

	if( a.every((x) => isFactor(i,x)) && b.every( (x) => isFactor(x,i))) 
		factors.push(i);

    }
   return factors.length;
   
}

function main() {

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

   console.log(total);

}

