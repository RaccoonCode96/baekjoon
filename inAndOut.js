// 입 출력
// (1) 2557번 Hello World
console.log('Hello World!');

console.log('-------------');

// (2) 10718번 We love kriii
console.log('강한친구 대한육군');
console.log('강한친구 대한육군');

console.log('-------------');

// (3) 10171번 고양이
console.log('\\    /\\');
console.log(" )  ( ')");
console.log('(  /  )');
console.log(' \\(__)|');

console.log('-------------');

// (4) 10172번 개
console.log('|\\_/|');
console.log('|q p|   /}');
console.log('( 0 )"""\\');
console.log('|"^"`    |');
console.log('||_/=\\\\__|');

// (5) 1000번 A+B
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
	console.log(A + B);
}

// (6) 1001번 A-B

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
	console.log(A - B);
}

// (7) 10998번 AxB
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0], input1[1]);

function solution(A, B) {
	console.log(A * B);
}

// (8) 1008번 A/B
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0], input1[1]);

function solution(A, B) {
	console.log(A / B);
}

// (9) 10869번 사칙연산
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0], input1[1]);

function solution(A, B) {
	console.log(A + B);
	console.log(A - B);
	console.log(A * B);
	console.log(parseInt(A / B));
	console.log(A % B);
}

// (10) 10430번 나머지
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0], input1[1], input1[2]);

function solution(A, B, C) {
	console.log((A + B) % C);
	console.log(((A % C) + (B % C)) % C);
	console.log((A * B) % C);
	console.log(((A % C) * (B % C)) % C);
}

// (11) 2588번 곱셈
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];
let input2 = input[1];

input1 = input1.split(' ').map((item) => +item);
input2 = input2.split(' ').map((item) => +item);

solution(input1, input2);

function solution(A, B) {
	String(B)
		.split('')
		.reverse()
		.forEach((i) => console.log(parseInt(i) * A));
	console.log(A * B);
}
