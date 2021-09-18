let start = new Date();
// ----------------- code -----------------

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let count = 0;

for (let i = 1; i < input.length; i++) {
	const rowSet = new Set([]);
	const row = input[i].trim().split('');
	let isGroup = true;

	for (let i = 0; i < row.length; i++) {
		const cur = row[i];
		const prev = i === 0 ? 0 : row[i - 1];
		if (cur !== prev && rowSet.has(cur)) {
			isGroup = false;
			break;
		}
		rowSet.add(cur);
	}

	if (isGroup) {
		count += 1;
	}
}

console.log(count);

// ----------------- check time -----------------
let end = new Date();
console.log(`걸린 시간 : ${end - start}ms`);
