console.log('Hello!');
let x = document.getElementById("q1")
let text = ""
for (var i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>"
}
console.log('text: ', text)
