console.log('Hello!');

let numberOfQuestions = 1

for (var i = 1; i < numberOfQuestions + 1; i++) {
  console.log('i: ', i)
  let num1 = parseInt(document.getElementById(`q${i}num1`).innerHTML)
  let sign = document.getElementById(`q${i}sign`).innerHTML
  let num2 = parseInt(document.getElementById(`q${i}num2`).innerHTML)
  let ans = []
  console.log('num1, sign, num2: ', num1, sign, num2)
  if (sign === '+') {
    ans[i] = num1 + num2
  } else if (sign === '-') {
    ans[i] = num1 - num2
  }
  console.log('ans: ', ans)
}
