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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here

    var rbl=0,rbm=0,mpoint=scores[0],lpoint=scores[0];

    for(var i=1;i<scores.length;i++){
	
	if(mpoint < scores[i]){

		rbm++;
                mpoint = scores[i];

	}else if( lpoint > scores[i] ){

		rbl++;
		lpoint = scores[i];

	}

    }

    return [rbm,rbl];
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    console.log(result.join(' '));

    //ws.end();
}

