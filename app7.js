//Q1(i)
var nodes = document.getElementById("main-content").children

//Q1(ii)
for(var i = 0; i < nodes.length; i++) {
  console.log(nodes[i])
}

//Q1(iii)
var para = document.getElementsByClassName("render")
for(var i = 0; i < para.length; i++) {
  console.log(para[i].innerHTML)
}

//Q1(iv)
var firstName = document.getElementById("first-name")
firstName.value = "Wajiha"

//Q1(v)
var lastName = document.getElementById("last-name")
lastName.value = "Umar"
var email = document.getElementById("email")
email.value = "wajiha.umar05@gmail.com"

//Q2(i)
var node_Type = document.getElementById("form-content").nodeType
console.log(node_Type)

//Q2(ii)
var node_Type1 = document.getElementById("lastName").nodeType
console.log(node_Type1)
var node_Type2 = document.getElementById("lastName").firstChild.nodeType
console.log(node_Type2)

//Q2(iii)
var update = document.getElementById("lastName").firstChild
update.nodeValue = "Last Name: John"
console.log(update)

//Q2(iv)
var parentNode = document.getElementById("main-content")
console.log(parentNode.firstElementChild.innerHTML)
console.log(parentNode.lastElementChild.innerHTML)

//Q2(v)
var add = document.getElementById("lastName")
console.log(add.nextElementSibling.innerHTML)
console.log(add.previousElementSibling.innerHTML)

//Q2(vi)
var mail = document.getElementById("email")
console.log(mail.nodeType)
console.log(mail.parentNode)