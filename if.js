// if 문 -------------------------------------------------------------
// (1) 1330번 두 수 비교하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0], input1[1]);

function solution(A, B) {
	if (A > B) {
		console.log('>');
	} else if (A < B) {
		console.log('<');
	} else {
		console.log('==');
	}
}

// (2) 9498번 시험 성적
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0]);

function solution(A) {
	if (90 <= A) {
		console.log('A');
	} else if (80 <= A) {
		console.log('B');
	} else if (70 <= A) {
		console.log('C');
	} else if (60 <= A) {
		console.log('D');
	} else {
		console.log('F');
	}
}

// (3) 2753번 윤년
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0]);

function solution(A) {
	if (A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)) {
		console.log(1);
	} else {
		console.log(0);
	}
}

// (4) 14681번 사분면 고르기
// fs 모듈 반응 하지 않음
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

function solution(A, B) {
	if (A > 0 && B > 0) {
		console.log(1);
	} else if (A < 0 && B > 0) {
		console.log(2);
	} else if (A < 0 && B < 0) {
		console.log(3);
	} else if (A > 0 && B < 0) {
		console.log(4);
	}
}

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input[0], input[1]);
	process.exit();
});

// (5) 2884번 알람시계
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let input1 = input[0];

input1 = input1.split(' ').map((item) => +item);

solution(input1[0], input1[1]);

function solution(A, B) {
	if (B >= 45) {
		console.log(A, B - 45);
	} else {
		console.log(A === 0 ? 23 : A - 1, 60 - Math.abs(B - 45));
	}
}
