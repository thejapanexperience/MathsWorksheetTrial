console.log('Hello!');
let x = document.getElementById('q1')
let length = x.length
console.log('length: ', length)
console.log('x: ', x)

let num1 = parseInt(document.getElementById('q1num1').innerHTML)
let sign = document.getElementById('q1sign').innerHTML
let num2 = parseInt(document.getElementById('q1num2').innerHTML)
let ans
console.log('num1, sign, num2: ', num1, sign, num2)
if (sign === '+') {
   ans = num1 + num2
} else if (sign === '-') {
   ans = num1 - num2
}
console.log('ans: ', ans)
