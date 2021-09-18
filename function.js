// 함수
// (1) 셀프 넘버
const range = new Set([]);
for (let i = 1; i <= 10000; i++) {
	range.add(i);
}

for (let i = 1; i <= 10000; i++) {
	checkSelf(i, range);
}

function checkSelf(n, range) {
	let sum = 0;
	for (let i = 0; i < String(n).length; i++) {
		sum += Number(String(n)[i]);
	}
	if (sum + n <= 10000) {
		range.delete(sum + n);
	}
}

console.log([...range].join('\n'));

// (2) 한수

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(input[0]);

function check(num) {
	let count = 0;
	for (let i = 1; i <= num; i++) {
		if (String(i).length === 1) {
			count = i;
		} else {
			const size = Number(String(i)[0]) - Number(String(i)[1]);
			const allSize = [];
			for (let j = 0; j < String(i).length - 1; j++) {
				const cur = Number(String(i)[j]);
				const next = Number(String(i)[j + 1]);

				if (cur - next === size) {
					allSize.push(true);
				} else {
					allSize.push(false);
				}
			}
			if (allSize.every((value) => value)) {
				count += 1;
			}
		}
	}
	console.log(count);
}

check(num);
