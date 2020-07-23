                         //****************** CHAPTER 43 - 48 ******************//
//Q1
// function message() {
//   alert("Hello")
// }

//Q2
// function showMsg() {
//   alert("Thanks for purchasing a phone with us!")
// }

//Q3
function del(e) {
  var rows = document.getElementsByClassName("tableRow")
  count = 0
  for(var i = 0; i < rows.length; i++) {
    rows[i].setAttribute("id",count)
    count+=1
    console.log(count)
  }
  var tr = e.parentNode.parentNode
  var trIndex = tr.getAttribute("id")
  document.getElementById("myTable").deleteRow(trIndex)
}

//Q5
// function increase() {
//   var value = document.getElementById("counter").innerText
//   value++
//   document.getElementById("counter").innerHTML = value
//   // console.log(value)
// }
// function decrease() {
//   var value = document.getElementById("counter").innerText
//   value--
//   document.getElementById("counter").innerHTML = value
// }