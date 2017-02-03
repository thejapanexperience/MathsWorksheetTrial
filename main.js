console.log('Hello!');

let numberOfQuestions = 2

let ans = {}

for (var i = 1; i < numberOfQuestions + 1; i++) {
  console.log('i: ', i)
  let num1 = parseInt(document.getElementById(`q${i}num1`).innerHTML)
  let sign = document.getElementById(`q${i}sign`).innerHTML
  let num2 = parseInt(document.getElementById(`q${i}num2`).innerHTML)
  console.log('num1, sign, num2: ', num1, sign, num2)
  if (sign === '+') {
    ans[i] = num1 + num2
  } else if (sign === '-') {
    ans[i] = num1 - num2
  }
  console.log('ans: ', ans)
}

function checkAnswer(qnum) {
  console.log('checkAnswer');
  console.log('question number ', qnum);
  let answer = document.getElementById(`q${qnum}ans`).value
  console.log('answer', answer)
  let rightAnswer = ans[qnum]
  console.log('rightAnswer: ', rightAnswer)
  if (answer == rightAnswer){
    document.getElementById(`q${qnum}Comment`).innerHTML=`Well Done! ${answer} is correct!`
    document.getElementById(`q${qnum}ans`).setAttribute("disabled", "disabled")
  } else if (answer, answer != rightAnswer){
    document.getElementById(`q${qnum}Comment`).innerHTML=`Unlucky! ${answer} is incorrect :( Try again?`
  }
}
