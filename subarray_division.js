'use strict';


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

// Complete the birthday function below.
function getSum(total, num) {

  return total + num;

}
function birthday(s, d, m) {

	var noofseg = 0;

	for(let i=0;i<s.length && i+m <= s.length;i++){

			let subar = s.slice(i,i+m);
			let sum = subar.reduce(getSum,0);
			if( sum == d )
				noofseg++;
			
	}
	return noofseg;


}

function main() {

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = birthday(s, d, m);

    console.log(result)
}

