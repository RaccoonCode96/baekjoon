// 기본 수학1
// (1) 손익분기점
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((num) => Number(num));
const dCost = input[0];
const vCost = input[1];
const income = input[2];
let q = 0;

if (vCost >= income) {
	q = -1;
} else {
	q = Number.isInteger(dCost / (income - vCost))
		? dCost / (income - vCost) + 1
		: Math.ceil(dCost / (income - vCost));
}

console.log(q);

// (2) 벌집
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const target = Number(input[0]);
console.log(Math.ceil((3 + Math.sqrt(12 * target - 3)) / 6));
/* 
벌집의 경우 중심 부로 부터 깊이를 생각하여 1, 2, 3 ... 으로 벌집 방의 늘어 나는 개수에 규칙이 존재
깊이 | 1 |    2   |    3    |     4   |    5   | ...
개수 | 1 | 6 + 6*0| 6 + 6*1 | 6 + 6*2 | 6+ 6*3 | ...
깊이 별 방의 개수가 일정하게 규칙성을 가지고 늘어남을 확인하였습니다.
깊이를 d 로 생각하여 d 에 해당 하는 끝 값을 식으로 나타낼 수 있습니다.

1
1 + 6(1 + 1*0)
1 + 6(1 + 1*0) + 6(1 + 1*1)
...
1 + 6(1 + 1*0) + 6(1 + 1*1) + ... + 6(1 + n)
1 다음 부터는 등차 수열의 합을 이용한 공식을 활용하여 나타낼 수 있습니다.
1 + 2 + 3 + ... (n-1) + n -> n(n+1)/2

1 + Σ6(d-2)+6
1 + Σ6(d-1) -> 1 + 3d(d-1) -> 3d^2 -3d + 1
해당 식이 가르키는 값에 target이 들어올 때, target에 따른 Depth 깊이를 해로 구할 수 있습니다.
예를 들어, depth가 3인 경우는 끝 값은 19입니다. 그러면 target이 18인 경우 depth는 3보다 조금 작은 숫자 입니다.
depth가 2 인경우 끝값은 7 이므로 target이 7< t <=19 이면, depth는 2< d <=3 입니다. 
target에 대한 depth가 소수점의 숫자 올림처리를 하면 해당 depth가 나오게 됩니다.
그래서 d를 구하는 근의 공식을 통해 식을 산출합니다.
3d^2 -3d + 1 = t
d = (3 + Math.sqrt(12 * t - 3)) / 6) 이며 이를 ceil를 통해 올림 처리 합니다.
*/

// (3) 분수 찾기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const target = Number(input[0]);
// 등차수열의 합에 대한 근 찾기
const sol = (-1 + Math.sqrt(8 * target + 1)) / 2;
// 근을 통한 줄 찾기
const rowNum = Math.ceil(sol);
// 줄을 통해서 몇 번째인지 찾기
const colNum = target - (rowNum * (rowNum - 1)) / 2;

// 짝수 번째는 분모가 크고, 홀수 번째 줄은 분자가 크고
if (rowNum % 2 === 0) {
	console.log(`${colNum}/${rowNum - colNum + 1}`);
} else {
	console.log(`${rowNum - colNum + 1}/${colNum}`);
}

// (4) 달팽이는 올라가고 싶다
/* 
무조건 u - d + u - d + ... + u로 끝난다.
day(u-d) + d = h
day = (h-d)/(u-d) 
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');
const u = Number(input[0]);
const d = Number(input[1]);
const h = Number(input[2]);
console.log(Math.ceil((h - d) / (u - d)));

// (5) ACM 호텔
/* 
몇번 째 줄의 몇 층인 지가 중요
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const testCount = Number(input[0]);
for (let i = 1; i <= testCount; i++) {
	const row = input[i].split(' ');
	const H = Number(row[0]);
	const N = Number(row[2]);

	const line = Math.ceil(N / H);
	const floor = N - H * (line - 1);
	console.log(floor * 100 + line);
}

// (6) 부녀회장이 될테야
/* 
중요한 점 : 층은 0 ~ 14 까지, 호수는 1 ~ 14까지 이므로 개수가 다름
*/
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
