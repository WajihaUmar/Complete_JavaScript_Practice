//Q1
// function display() {
//   var name = document.getElementById("name")
//   var email = document.getElementById("mail")
//   var showing = document.getElementById("show")

//   var p1 = document.createElement("p")
//   var textNode1 = document.createTextNode(name.value)
//   p1.appendChild(textNode1)

//   var p2 = document.createElement("p")
//   var textNode2 = document.createTextNode(email.value)
//   p2.appendChild(textNode2)

//   showing.appendChild(p1)
//   showing.appendChild(p2)
// }


//Q2
// function expand() {
//   var expandedPara = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos aliquid voluptatum magnam! Inventore possimus exercitationem mollitia praesentium numquam veritatis culpa debitis et, accusantium at. Necessitatibus architecto voluptate culpa odio?"
//   document.getElementById("para").innerHTML = expandedPara
// }


//Q3
// function add() {
//   var index = document.getElementById("index")
//   var name = document.getElementById("name")
//   var Stdclass = document.getElementById("class")
//   var table = document.getElementById("myTable")

//   var tableRow = document.createElement("tr")
//   tableRow.setAttribute("class","tableRow")

//   var td1 = document.createElement("td")
//   var td1Text = document.createTextNode(index.value)
//   td1.appendChild(td1Text)
//   console.log(td1)

//   var td2 = document.createElement("td")
//   var td2Text = document.createTextNode(name.value)
//   td2.appendChild(td2Text)
//   console.log(td2)

//   var td3 = document.createElement("td")
//   var td3Text = document.createTextNode(Stdclass.value)
//   td3.appendChild(td3Text)
//   console.log(td3)

//   var td4 = document.createElement("td")
//   var td4Btn = document.createElement("button")
//   td4.setAttribute("onclick","deleteRecord(this)")
//   var td4BtnText = document.createTextNode("Delete")
//   td4Btn.appendChild(td4BtnText)
//   td4.appendChild(td4Btn)
//   console.log(td4)

//   tableRow.appendChild(td1)
//   tableRow.appendChild(td2)
//   tableRow.appendChild(td3)
//   tableRow.appendChild(td4)
//   table.appendChild(tableRow)

//   index.value = ""
//   name.value = ""
//   Stdclass.value = ""
// }

// function deleteRecord(e) {
//   var rows = document.getElementsByClassName("tableRow")
//   count = 0
//   for(var i = 0; i < rows.length; i++) {
//     rows[i].setAttribute("id",count)
//     count+=1
//     console.log(count)
//   }
//   var tr = e.parentNode.parentNode
//   var trIndex = tr.getAttribute("id")
//   document.getElementById("myTable").deleteRow(trIndex)
// }