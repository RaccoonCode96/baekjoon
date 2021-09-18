// 문자열
// (1) 아스키 코드
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(input[0].charCodeAt(0));

// (2) 숫자의 합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const sum = input[1]
	.split('')
	.reduce((prev, cur) => Number(prev) + Number(cur), 0);
console.log(sum);

// (3) 알파벳 찾기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const str = input[0];
const alphabets = Array(26).fill(0);

for (let i = 0; i < 26; i++) {
	alphabets[i] = str.indexOf(String.fromCharCode(97 + i));
}

console.log(alphabets.join(' '));

// (4) 문자열 반복

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let answer = '';
for (let i = 0; i < input.length; i++) {
	const cur = input[i].split(' ');
	const num = cur[0];
	const str = cur[1];
	if (!num || !str) {
		continue;
	}
	answer +=
		str
			.split('')
			.map((item) => item.repeat(num))
			.join('') + '\n';
}

console.log(answer);

// (5) 단어 공부
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].toUpperCase();
const alphabets = Array(26).fill(0);
input.split('').map((al) => {
	alphabets[al.charCodeAt(0) - 65] += 1;
});

const maxCount = Math.max(...alphabets);

if (alphabets.filter((i) => i === maxCount).length > 1) {
	console.log('?');
} else {
	console.log(String.fromCharCode(alphabets.indexOf(maxCount) + 65));
}

// (6) 단어의 개수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

if (input[0].split(' ')[0] === '') {
	console.log(0);
} else {
	console.log(input[0].split(' ').length);
}

// (7) 상수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const nums = input[0]
	.split(' ')
	.map((item) => Number(item.split('').reverse().join('')));

console.log(nums[0] > nums[1] ? nums[0] : nums[1]);

// (8) 다이얼

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// case1
const sec = {
	A: 3,
	B: 3,
	C: 3,
	D: 4,
	E: 4,
	F: 4,
	G: 5,
	H: 5,
	I: 5,
	J: 6,
	K: 6,
	L: 6,
	M: 7,
	N: 7,
	O: 7,
	P: 8,
	Q: 8,
	R: 8,
	S: 8,
	T: 9,
	U: 9,
	V: 9,
	W: 10,
	X: 10,
	Y: 10,
	Z: 10,
};
// case 2
const newSec = {};
let num = 3;
for (let i = 0; i < 26; i++) {
	const curAlphabet = String.fromCharCode(65 + i);
	if (i < 18) {
		newSec[curAlphabet] = num;
		if (i % 3 === 2 && i !== 17) {
			num += 1;
		}
	} else if (i === 18) {
		newSec[curAlphabet] = num;
		num += 1;
	} else if (i > 18) {
		newSec[curAlphabet] = num;
		if (i % 3 === 0 && i !== 24) {
			num += 1;
		}
	}
}

const res = input[0].split('').map((item) => newSec[item]); // case2 일때 sec을 newSec으로 변경
console.log(res.reduce((prev, cur) => prev + cur, 0));

// (9) 크로아티아 알파벳
