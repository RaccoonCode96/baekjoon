let start = new Date();
// ----------------- code -----------------
/*
0 <= input <= 99 -> 정수
input < 10 -> 0을 붙여 두자리로 만들고 각 자리의 숫자를 더함
가장 작은 자리수와 
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let count = 0;
let prevNum = Number(input[0]);
let num = Number(input[0]);

while (true) {
	const ten = parseInt(num / 10);
	const one = num % 10;
	const afterOne = (ten + one) % 10;
	num = one * 10 + afterOne;
	count++;
	if (prevNum === num) {
		break;
	}
}

console.log(count);

// ----------------- check time -----------------
let end = new Date();
console.log(`걸린 시간 : ${end - start}ms`);
