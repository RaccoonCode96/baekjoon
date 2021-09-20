let start = new Date();
// ----------------- code -----------------
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const testCount = Number(input[0]);
const rooms = Array.from({ length: 15 }, () => Array(14).fill(0));
let answer = '';
for (let i = 0; i < 15; i++) {
	rooms[i][0] = 1;
	if (i < 14) {
		rooms[0][i] = i + 1;
	}
}
for (let i = 1; i < 14; i++) {
	for (let j = 1; j < 15; j++) {
		rooms[j][i] = rooms[j - 1][i] + rooms[j][i - 1];
	}
}

for (let i = 0; i < testCount; i++) {
	const floor = Number(input[2 * i + 1]);
	const line = Number(input[2 * i + 2]) - 1;
	answer += `${rooms[floor][line]}\n`;
}

console.log(answer);
// j 층, i 호

// ----------------- check time -----------------
let end = new Date();
console.log(`걸린 시간 : ${end - start}ms`);
