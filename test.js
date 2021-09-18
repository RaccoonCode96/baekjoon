let start = new Date();
// ----------------- code -----------------

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0];
let count = 0;
const ctAlphabet = ['c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];

function check2(input) {
	if (!input) {
		console.log(count);
		return;
	}
	const cur = input.slice(0, 2);
	if (ctAlphabet.indexOf(cur) !== -1) {
		count += 1;
		return check2(input.slice(2));
	} else if (cur === 'dz') {
		return check3(input.slice(0));
	} else {
		count += 1;
		return check2(input.slice(1));
	}
}

function check3(input) {
	if (input.slice(0, 3) === 'dz=') {
		count += 1;
		return check2(input.slice(3));
	} else {
		return check2(input);
	}
}

check2(input);

// ----------------- check time -----------------
let end = new Date();
console.log(`걸린 시간 : ${end - start}ms`);
