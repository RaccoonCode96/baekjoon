# 📝 백준 문제 풀기

Node.js를 통해서 백준 문제를 풀고 있습니다.

```js
// fs 방식 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// input은 각 txt 파일의 row를 string형태의 값을 Array로 가짐
// row가 1개 또는 여러개 인 경우 input을 신경써야 합니다.
// 간혹, fs가 되지 않는 경우가 있으니, 그때는 readline을 사용해야 합니다.

// 출력 결과는 항상 console.log를 통해서 전달
```

## 2021.09.17

- 기본 입출력 문제 (11개)
- if 조건문 문제 (5 개)
- for, while 반복문 문제 (11문제 + 3문제)

## 2021.09.18

- 1차원 배열 문제 (7개)
- 함수 문제 (2개)
- 문자열 문제 (10개)
