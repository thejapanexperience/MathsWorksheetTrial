console.log('Hello!');

let numberOfQuestions = 2

let ans = {}
let score = 0
let completed = 0

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
    document.getElementById(`q${qnum}Comment`).innerHTML=`Well done! ${answer} is correct!`
    document.getElementById(`q${qnum}ans`).setAttribute("disabled", "disabled")
    score += 1
    completed += 1
    document.getElementById('score').innerHTML=`Your score: ${score}`
    document.getElementById('upperMessage').innerHTML=`Keep going!!`
    if (completed === numberOfQuestions){
      document.getElementById('upperMessage').innerHTML=`Amazing! You finished all the questions!`
    }
  } else if (isNaN(parseInt(answer))){
    document.getElementById(`q${qnum}Comment`).innerHTML=`Oops! Something went wrong. Try again.`
  } else if (answer, answer != rightAnswer){
    document.getElementById(`q${qnum}Comment`).innerHTML=`Unlucky! ${answer} is incorrect :( Try again?`
    score += -1
    document.getElementById('score').innerHTML=`Your score: ${score}`
    }
}
