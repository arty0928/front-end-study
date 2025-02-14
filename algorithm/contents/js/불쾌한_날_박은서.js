const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const N = input[0];

const cows = input.slice(1);

let answer = 0;
let stack = [];

for(let i = 0; i < N; i++){

  let cur = cows[i];
  while(stack.length!== 0 && stack[stack.length -1] <= cur){
    stack.pop();
  }

  answer += stack.length;
  stack.push(cur);
}

console.log(answer);