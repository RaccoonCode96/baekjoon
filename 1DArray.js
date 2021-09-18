// 1차원 배열
// (1) 최소, 최대 문제
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const nums = input[1].split(' ');
let max = Number(nums[0]);
let min = Number(nums[0]);

for (let i = 0; i < nums.length; i++) {
	const cur = Number(nums[i]);
	if (max < cur) {
		max = cur;
	} else if (min > cur) {
		min = cur;
	}
}

console.log(min, max);

// (2) 최댓값
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let max = Number(input[0]);
let index = 0;
for (let i = 0; i < input.length; i++) {
	const cur = Number(input[i]);
	if (cur > max) {
		max = cur;
		index = i;
	}
}

console.log(max);
console.log(index + 1);

// (3) 숫자의 개수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let multiply = 1;
input.map((item) => {
	multiply = multiply * Number(item);
	// multiply *= Number(item)
});

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const strMulti = multiply.toString();

for (let i = 0; i < strMulti.length; i++) {
	const value = Number(strMulti[i]);
	counts[value] += 1;
}

console.log(counts.join('\n'));

// (4) 나머지
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const remainder = new Set([]);

for (let i = 0; i < input.length; i++) {
	remainder.add(Number(input[i]) % 42);
}

console.log(remainder.size);

// (5) 평균
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const count = Number(input[0]);
const scores = input[1].split(' ');
let max = Number(scores[0]);

for (let i = 0; i < scores.length; i++) {
	const cur = Number(scores[i]);
	if (cur > max) {
		max = cur;
	}
}

const newScores = scores.map((item) => (Number(item) / max) * 100);
const average = newScores.reduce((prev, cur) => prev + cur, 0) / count;

console.log(average);

// (6) OX퀴즈
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const count = Number(input[0]);
let answer = '';

for (let i = 1; i <= count; i++) {
	const row = input[i].split('');
	let circleValue = 0;
	let rowSum = 0;

	for (let i = 0; i < row.length; i++) {
		const cur = row[i];
		const prev = row[i - 1];

		if (prev !== cur && cur === 'O') {
			circleValue = 1;
			rowSum += circleValue;
		} else if (prev === cur && cur === 'O') {
			circleValue += 1;
			rowSum += circleValue;
		}
	}

	answer += `${rowSum}\n`;
}

console.log(answer);

// (7) 평균은 넘겠지
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let answer = '';

for (let i = 0; i < input.length; i++) {
	const row = input[i].trim().split(' ');
	const students = Number(row[0]);
	// 입력 유효성 검사
	if (!students || students > row.length) {
		continue;
	}
	// 평균 구하기
	let sum = 0;
	let pass = 0;
	for (let i = 1; i < row.length; i++) {
		sum += Number(row[i]);
	}
	const average = sum / students;

	// 평균을 넘는 사람의 수 구하기
	for (let i = 1; i < row.length; i++) {
		if (Number(row[i]) > average) {
			pass += 1;
		}
	}
	// 평균을 넘는 사람 비율 구하기(소수 3째 자리 까지 모두 표기)
	answer += `${parseFloat(
		Math.round((pass / students) * 100 * 1000) / 1000
	).toFixed(3)}%\n`;
}
console.log(answer);
