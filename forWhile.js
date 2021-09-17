// For 문 -----------------------------------------
// (1) 구구단
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0]);

function solution(A) {
	for (let i = 1; i <= 9; i++) {
		console.log(`${A} * ${i} = ${A * i}`);
	}
}

// (2) A+B - 3
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 0; i <= input.length - 1; i++) {
	let input1 = input[i];
	input1 = input1.split(' ').map((item) => +item);
	if (input1.length <= 1) {
		continue;
	}
	solution(input1[0], input1[1]);
}

function solution(A, B) {
	console.log(A + B);
}

// (3) 합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];
input1 = input1.split(' ').map((item) => +item);

solution(input1[0]);

function solution(A) {
	let sum = 0;
	for (let i = 1; i <= A; i++) {
		sum += i;
	}
	console.log(sum);
}

// (4) 빠른 A + B
// 함수를 호출하는 횟수가 많아지면, 느려지므로 최대한 자료를 조합하여 한번에 출력할 수 있도록 함
// 1348ms
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
for (let i = 0; i <= input.length - 1; i++) {
	let input1 = input[i];
	input1 = input1.split(' ');
	if (input1.length <= 1) {
		continue;
	}
	answer += Number(input1[0]) + Number(input1[1]) + '\n';
}

console.log(answer);

// (5) N 찍기
// 천만개 (10,000,000) 기준 5179ms
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
for (let i = 1; i <= input[0]; i++) {
	answer += i + '\n';
}

console.log(answer);

// (6) 기찍 N
// 천만개 (10,000,000) 기준 5545ms
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
for (let i = 0; i < input[0]; i++) {
	answer += input[0] - i + '\n';
}

console.log(answer);

// (7) A+B - 7
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
let count = 0;

for (let i = 0; i <= input.length - 1; i++) {
	let row = input[i].split(' ');
	if (row.length <= 1) {
		continue;
	} else {
		count += 1;
	}
	answer += `Case #${count}: ${Number(row[0]) + Number(row[1])}\n`;
}

console.log(answer);

// (8) A + B - 8
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
let count = 0;

for (let i = 0; i <= input.length - 1; i++) {
	let row = input[i].split(' ');
	if (row.length <= 1) {
		continue;
	} else {
		count += 1;
	}
	answer += `Case #${count}: ${row[0]} + ${row[1]} = ${
		Number(row[0]) + Number(row[1])
	}\n`;
}

console.log(answer);

// (9) 별 찍기 - 1
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
const input1 = Number(input[0]);
for (let i = 1; i <= input1; i++) {
	answer += '*'.repeat(i) + '\n';
}

console.log(answer);

// (10) 별 찍기 - 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
const input1 = Number(input[0]);
for (let i = 1; i <= input1; i++) {
	answer += ' '.repeat(input1 - i) + '*'.repeat(i) + '\n';
}

console.log(answer);

// (11) X보다 작은 수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';

const input1 = input[0].split(' ');
const input2 = input[1].split(' ');

for (let i = 0; i < Number(input1[0]); i++) {
	if (Number(input2[i]) < input1[1]) {
		answer += `${input2[i]} `;
	}
}

console.log(answer);

// while ----------------------------------------------
// (1) A + B - 5
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
let count = 0;
while (count < input.length) {
	const row = input[count];
	const items = row.split(' ');
	if (!(Number(items[0]) + Number(items[1]))) {
		count++;
		continue;
	}
	answer += `${Number(items[0]) + Number(items[1])}\n`;
	count++;
}

console.log(answer);

// (2) A + B - 4
// 정수인 입력값만 연산하여 출력해야 합니다.
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
let count = 0;
while (count < input.length) {
	const row = input[count];
	const items = row.split(' ');
	if (Number(items[0]) % 1 !== 0 || Number(items[1]) % 1 !== 0) {
		count++;
		continue;
	}

	answer += `${parseInt(items[0]) + parseInt(items[1])}\n`;

	count++;
}

console.log(answer);

// (3) 더하기 사이클
// 숫자 앞에 0 붙이는 것은 05, 08 이런식을 이야기 함
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
