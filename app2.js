                       //****************** CHAPTER 11 - 25 ******************//
//Q1
// var firstName = prompt("Enter first name")
// var lastName = prompt("Enter last name")
// var fullName = firstName + " " + lastName
// document.write("Hello " + fullName + "! Welcome to our Site")

//Q2
// var input = prompt("Enter your favorite mobile phone model")
// document.write("My favourite phone is: " + input + "<br>")
// document.write("Length of string: " + input.length)

//Q3
// var str = "Pakistani"
// var find = str.indexOf("n")
// document.write("String: " + str + "<br>")
// document.write("Index of \'n\' is: " + find)

//Q4
// var str = "Hello World"
// var find = str.lastIndexOf("l")
// document.write("String: " + str + "<br>")
// document.write("last Index of \'l\': " + find)

//Q5
// var str = "Pakistani"
// var find = str.charAt(3)
// document.write("String: " + str + "<br>")
// document.write("Character at index 3: " + find)

//Q6
// var firstName = prompt("Enter first name")
// var lastName = prompt("Enter last name")
// var fullName = firstName.concat(" ").concat(lastName)
// document.write("Hello " + fullName + "! Welcome to our Site")

//Q7
// var city = "Hyderabad"
// var newCity = city.replace("Hyder","Islam")
// document.write("City: " + city + "<br>")
// document.write("After replacement: " + newCity)

//Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMsg = message.replace(/and/g, "&")
// document.write(newMsg)

//Q9
// var value = "472"
// document.write("Value: " + value + "<br>")
// document.write("Type: " + typeof value + "<br>")
// var valStr = parseInt(value)
// document.write("Value: " + valStr + "<br>")
// document.write("Type: " + typeof valStr + "<br>")

//Q10
// var input = prompt("Enter string to convert into capital case")
// var upperInput = input.toUpperCase()
// document.write("User Input: " + input + "<br>")
// document.write("Upper case: " + upperInput)

//Q11
// var input = prompt("Enter string to convert into title case")
// var titleCase = input[0].toUpperCase()
// for(i = 1; i < input.length; i++) {
//   titleCase += input[i].toLowerCase()
// }
// document.write("User Input: " + input + "<br>")
// document.write("Upper case: " + titleCase)

//Q12
// var num = 35.36 
// var n = num.toString()
// var newNum = n.replace(".","")
// document.write("Number: " + num + "<br>")
// document.write("Result: " + newNum)

//Q13
// var name = prompt("Enter your valid name")
// var check = false
// for(i = 0; i < name.length; i++) {
//   if(name[i] == "@" || name[i] == "." || name[i] == "," || name[i] == "!") {
//     check = true
//   }
// }
// if (check == false) {
//   document.write("Welcome, " + name)
// }
// else {
//   var ReviseName = prompt("Please enter your valid name")
//   document.write("Welcome, " + ReviseName)
// }

//Q14
// var item = ["cake", "apple pie", "cookie", "chips", "patties"]
// var srch = prompt("Welcome to ABC bakery, What do you want to order")
// var search = srch.toLowerCase()
// var index = item.indexOf(search)
// if(index == "-1") {
//   document.write("we are sorry. " + search + " is not avaialable in our bakery")
// }
// else {
//   document.write(search + " is available at index " + index + " in our bakery")
// }

// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long

//Q15
// var pass = prompt("Please enter a password according to the following requirement. \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long ")
// var check1a
// var check1b
// for(i = 0; i < pass.length; i++) {
//   if((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122)) {
//     check1a = true
//   }
//   if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
//     check1b = true
//   }
// }
// var check2 = true
// if(pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57) {
//   check2 = false
// }
// var check3
// if(pass.length >= 6) {
//   check3 = true
// }
// if(check1a == true && check1b == true && check2 == true && check3 == true) {
//   document.write("Password accepted")
// }
// else {
//   prompt("Please enter valid password")
// }

//Q16
// var university = "University of Karachi";
// var uniSplitted = university.split("")
// for(i = 0; i < uniSplitted.length; i++) {
//   document.write(uniSplitted[i] + "<br>")
// }

//Q17
// var input = prompt("Enter a word to find its last character")
// document.write("User Input: " + input + "<br>")
// document.write("Last character of input: " + input.charAt(input.length-1))

//Q18
// var str = "The quick brown fox jumps over the lazy dog"
// var strArr = str.toLowerCase().split(" ")
// var count = 0
// for(i = 0; i < strArr.length; i++) {
//   if(strArr[i] == "the") {
//     count += 1;
//   }
// }
// document.write("Text: " + str + "<br>")
// document.write("There are " + count + " occurance(s) of word \'the\'")


                       //****************** CHAPTER 26 - 30 ******************//
//Q1
// var num = +prompt("Enter a positibe number")
// document.write("Number: " + num + "<br>")
// document.write("Round of value: " + Math.round(num) + "<br>")
// document.write("floor value: " + Math.floor(num) + "<br>")
// document.write("ceil value: " + Math.ceil(num) + "<br>")

//Q2
// var num = +prompt("Enter a negative number")
// document.write("Number: " + num + "<br>")
// document.write("Round of value: " + Math.round(num) + "<br>")
// document.write("floor value: " + Math.floor(num) + "<br>")
// document.write("ceil value: " + Math.ceil(num) + "<br>")

//Q3
// var num = parseInt(prompt("Enter a number"))
// document.write("The absolute value of " + num + " is " + Math.abs(num))

//Q4
// var bigDecimal = Math.random()
// var improvedNum = (bigDecimal * 6) + 1
// var numberOfStars = Math.floor(improvedNum)
// var bigDecimal1 = Math.random()
// var improvedNum1 = (bigDecimal1 * 6) + 1
// var numberOfStars1 = Math.floor(improvedNum1)
// document.write("Random dice value: " + numberOfStars + "<br>")
// document.write("Random dice value: " + numberOfStars1 + "<br>")

//Q5
// var bigDecimal = Math.random()
// var improvedNum = (bigDecimal * 2) + 1
// var numberOfStars = Math.floor(improvedNum)
// document.write(numberOfStars + "<br>")
// if(numberOfStars == 2) {
//   document.write("random coin value: Heads")
// }
// else {
//   document.write("random coin value: Tails")
// }

//Q6
// var bigDecimal = Math.random()
// var improvedNum = (bigDecimal * 100) + 1
// var numberOfStars = Math.floor(improvedNum)
// document.write("random number between 1 - 100 is: " + numberOfStars)

//Q8
// var bigDecimal = Math.random()
// var improvedNum = (bigDecimal * 10) + 1
// var numberOfStars = Math.floor(improvedNum)
// var num = parseInt(prompt("Enter a number between 1 - 10"))
// document.write(numberOfStars + "<br>")
// if(num == numberOfStars) {
//   document.write("Congratulations")
// }
// else {
//   document.write("Try Again")
// }


                       //****************** CHAPTER 31 - 34 ******************//
//Q1
// var dateTime = new Date()
// document.write(dateTime)

//Q2
// var dateTime = new Date()
// var month = dateTime.getMonth()
// var monthStr
// if(month == 0)
//   monthStr = "January"
// if(month == 1)
//   monthStr = "February"
// if(month == 2)
//   monthStr = "March"
// if(month == 3)
//   monthStr = "April"
// if(month == 4)
//   monthStr = "May"
// if(month == 5)
//   monthStr = "June"
// if(month == 6)
//   monthStr = "July"
// if(month == 7)
//   monthStr = "August"
// if(month == 8)
//   monthStr = "September"
// if(month == 9)
//   monthStr = "October"
// if(month == 10)
//   monthStr = "November"
// if(month == 11)
//   monthStr = "December"
// document.write("Current month: " + monthStr)

//Q3
// var dateTime = new Date()
// var day = dateTime.getDay()
// var dayStr
// if(day == 0)
//   dayStr = "Sunday"
// if(day == 1)
//   dayStr = "Monday"
// if(day == 2)
//   dayStr = "Tuesday"
// if(day == 3)
//   dayStr = "Wednesday"
// if(day == 4)
//   dayStr = "Thursday"
// if(day == 5)
//   dayStr = "Friday"
// if(day == 6)
//   dayStr = "Saturday"
// var dayStrShort = dayStr.slice(0,3)
// document.write("Today is " + dayStrShort)

//Q4
// var dateTime = new Date()
// var day = dateTime.getDay()
// var dayStr
// if(day == 0)
//   dayStr = "Sunday"
// if(day == 1)
//   dayStr = "Monday"
// if(day == 2)
//   dayStr = "Tuesday"
// if(day == 3)
//   dayStr = "Wednesday"
// if(day == 4)
//   dayStr = "Thursday"
// if(day == 5)
//   dayStr = "Friday"
// if(day == 6)
//   dayStr = "Saturday"
// if(dayStr == "Saturday" || dayStr == "Sunday") {
//   document.write("Its fun day")
// }

//Q5
// var dateTime = new Date()
// var date = dateTime.getDate()
// if(date < 16) {
//   document.write("First fifteen days of the month")
// }
// else if(date >= 16) {
//   document.write("Last days of the month.")
// }

//Q6
// var dateTime = new Date()
// var milliMin = dateTime.getTime()
// var ConvMin = milliMin/(1000*60*60)
// document.write("Current Date: " + dateTime + "<br>")
// document.write("Elapsed milliseconds since January 1, 1970: " + milliMin + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + ConvMin)

//Q7
// var dateTime = new Date()
// var hours = dateTime.getHours()
// if(hours < 12) {
//   document.write("Its AM")
// }
// else
//   document.write("Its PM")

//Q8
// var laterDate = new Date(2020,11,31,0,0,0,0)
// document.write(laterDate)

//Q9
// var ramzanDate = new Date(2020,5,18)
// var currentDate = new Date()
// var ramzanDay = ramzanDate.getTime()
// var currentTime = currentDate.getTime()
// var daysDifference = (currentTime-ramzanDay)/(1000*60*60*24)
// var numberOfDays = Math.trunc(daysDifference)
// document.write(numberOfDays + ' days have been passed since 1st Ramzan,2015')

//Q10
// var refDate = new Date(2015,11,5,22,50,16).getTime();
// var beginDate = new Date(2015,0,1).getTime();
// var secondDifference = (refDate-beginDate)/(1000);
// document.write(secondDifference + ' Seconds have passed from Begining of 2015 to sat Dec 05 2015');

//Q11
// var currentDate = new Date();
// document.write(currentHour);
// var newDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate(),currentHour);
// document.write(newDate)

//Q12
// var currentDate = new Date()
// var oldDate = new Date(currentDate.getFullYear()-100,currentDate.getMonth(),currentDate.getDate(),currentDate.getHours,currentDate.getSeconds(),currentDate.getMilliseconds())
// console.log(currentDate)
// console.log(oldDate)

//Q13
// var age = parseInt(prompt("Enter your age"))
// var dateTime = new Date()
// var year = dateTime.getFullYear()
// var dob = year - age
// document.write("Your birth year is " + dob)

//Q14
// var CustName = prompt("Enter Customer name")
// var dateTime = new Date()
// var monthNum = dateTime.getMonth()
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var month = months[monthNum]
// var numberOfUnits = parseInt(prompt("Enter number of units"))
// var ChrgePerUnit = parseInt(prompt("Enter charge per units"))
// var netAmount = numberOfUnits * ChrgePerUnit
// var LatePay = parseInt(prompt("Enter late payment surchage"))
// var grossAmount = netAmount + LatePay
// document.write("<h2> K-Electric Bill </h2> <br> <br>")
// document.write("Customer Name: " + CustName + "<br>")
// document.write("Month: " + month + "<br>")
// document.write("Number of Units: " + numberOfUnits + "<br>")
// document.write("Charge per unit: " + ChrgePerUnit + "<br> <br>")
// document.write("Net Amount payable (within Due Date): " + netAmount + "<br>")
// document.write("Late payment surcharge: " + LatePay + "<br>")
// document.write("Gross amount payable (after Due Date): " + grossAmount)


                       //****************** CHAPTER 35 - 38 ******************//
//Q1
// function datetime() {
//   var dateTime = new Date()
//   document.write(dateTime)
// }
// datetime()

//Q2
// function greeting(a, b) {
//   var fullName = a + " " + b
//   document.write("Hello " + fullName)
// }
// greeting("Wajiha", "umar")

//Q3
// function add(a, b) {
//   return a + b
// }
// var one = parseInt(prompt("Enter first number"))
// var two = parseInt(prompt("Enter second number"))
// var result = add(one, two)
// document.write("Addition is: " + result)

//Q4
// function calculator(a, b, op) {
//   if(op == "+") {
//     return a + b
//   }
//   else if(op == "-") {
//     return a - b
//   }
//   else if(op == "/") {
//     return a/b
//   }
//   else if(op == "%") {
//     return a%b
//   }
// }
// var one = parseInt(prompt("Enter first number"))
// var two = parseInt(prompt("Enter second number"))
// var operator = prompt("Enter Oeration")
// var result = calculator(one, two, operator)
// document.write("result is: " + result) 

//Q5
// function square(a) {
//   return a * a
// }
// var num = parseInt(prompt("Enter number to take its square"))
// document.write("Square of " + num + " is " + square(num))

//Q6
// function factorial(num) {
//   var fact = 1
//   for(i = num; i > 0; i--) {
//     fact = fact * i
//   }
//   document.write("Factorial is: " + fact)
// }
// factorial(5)

//Q7
// function counting(a, b) {
//   for(i = a; i <= b; i++) {
//     document.write(i + "<br>")
//   }
// }
// counting(10,25)

//Q8
// function Hypo(b, p) {  
//   function sq(num) {  
//       return num * num; 
//   } 
//   var h = sq(b) + sq(p)
//   document.write("Hypotenuse " + h)
// } 
// Hypo(2, 3)

//Q9
// function area(w, h) {
//   document.write("Area is " + w*h)
// }
// var height = 5
// area(3, height)

//Q10
// function palindrome(str) {
//    var reverseStr = str.split('').reverse().join('')
//    if(reverseStr === str) {
//      document.write("Yes, the string is palindrome")
//    }
//    else {
//     document.write("No, the string is not a palindrome")
//    }
// }
// palindrome("test")

//Q11
// function camelCase(str) {
//   var strArr = str.split(" ")
//   var resultStr
//   for(i = 0; i < strArr.length; i++) {
//     str[i] = str[i][0].toUpperCase()
//   }
// }
// document.write(camelCase("hello dt vhtut vh"))

//Q12
// function LongestWord(str) {
//   var strSplit = str.split(' ')
//   var WordLength = 0
//   var longestWord = ""
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > WordLength){
//       WordLength = strSplit[i].length
//       longestWord = strSplit[i]
//     }
//   }
//   return longestWord
// }
// document.write(LongestWord("Web Development Tutorial"))

//Q13
// function find(str, letter) {
//   var count = 0
//   for(i = 0; i< str.length; i++) {
//     if(str[i] == letter) {
//       count += 1
//     }
//   }
//   document.write(count)
// }
// find("JSResourceS.com","S")

//Q14
// var pie = 3.14
// function calcCircumference(r) {
//   cir = 2 * pie * r
//   document.write("The circumference is " + cir + "<br>")
// }
// function calcArea(r) {
//   area = pie * r * r
//   document.write("The area is " + area)
// }
// calcCircumference(4)
// calcArea(4)