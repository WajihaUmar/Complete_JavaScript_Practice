                         //****************** CHAPTER 38 - 42 ******************//
//Q1
// var val = parseInt(prompt("Enter the value"))
// var pow = parseInt(prompt("Enter its power"))
// function power(val, pow) {
//   var temp = 1
//   for(var i = 0; i < pow; i++) {
//     temp = temp * val
//   }
//   console.log(temp)
// }
// power(val, pow)

//Q2
// var year = parseInt(prompt("Enter any year"))
// function leapYear(y) {
//   if(y % 4 == 0) {
//     console.log(y + " is a leap year")
//   }
//   else {
//     console.log(y +" is not a leap year")
//   }
// }
// leapYear(year)

//Q3
// var a = parseInt(prompt("Enter first length of the triangle"))
// var b = parseInt(prompt("Enter second length of the triangle"))
// var c = parseInt(prompt("Enter third length of the triangle"))
// function calculateS(a, b, c) {
//   var S = (a + b + c)/2
//   return S
// }
// function area(a, b, c) {
//   var s = calculateS(a, b, c)
//   var area = s * (s - a) * (s - b) * (s - c)
//   console.log("Area of the triangle is: " + area)
// }
// area(a, b, c)

//Q4
// var mark1 = parseInt(prompt("Enter marks of first subject"))
// var mark2 = parseInt(prompt("Enter marks of second subject"))
// var mark3 = parseInt(prompt("Enter marks of third subject"))
// function average(mark1, mark2, mark3) {
//   var avg = (mark1 + mark2 + mark3) / 3
//   return avg
// }
// function percentage(mark1, mark2, mark3) {
//   var total = mark1 + mark2 + mark3
//   var perc = (total/300) * 100
//   return perc
// }
// function mainFunction(mark1, mark2, mark3) {
//   var avg = average(mark1, mark2, mark3)
//   var per = percentage(mark1, mark2, mark3)
//   console.log("Average is: " + avg)
//   console.log("Percentage is: " + per)
// }
// mainFunction(mark1, mark2, mark3)

//Q5
// var str = prompt("Enter a string")
// var chr = prompt("Enter a character to find its index")
// function findIndex(str, chr) {
//   var index
//   for(var i = 0; i < str.length; i++) {
//     if(str[i] == chr) {
//       index = i
//       break
//     }
//   }
//   console.log("Index is " + index)
// }
// findIndex(str, chr)

//Q6
// var str = prompt("Enter a string to delete its vowels")
// function delVowels(str) {
//   var newStr = ""
//   for(var i = 0; i < str.length; i++) {
//     if(str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
//       newStr += str[i]
//     }
//   }
//   console.log(newStr)
// }
// delVowels(str)

//Q7
// function findOccurrences() {
//   var str = "Pleases read this application and give me gratuity";
//   var chars = str.toLowerCase().split("");
//   var count = 0;
  
//   for(let i = 0; i < chars.length - 1; i++) {
//     var char = chars[i];
//     var next = chars[i + 1];
    
//     // Increase count if both characters are any of the following: aeiou
//     if(isVowel(char) && isVowel(next)) {
//       count++
//     }
//   }
//   return count;
// }
// function isVowel(char) {
//   switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       return true;
//     default:
//       return false;
//   }
// }
// var found = findOccurrences();
// console.log(found);

//Q8
// var dist = +prompt("Enter distance between two cities in km")
// function meters(dist) {
//   var mtr = dist * 1000
//   console.log("Distance in meters is " + mtr)
// }
// function feet(dist) {
//   var foots = dist * 3280.84
//   console.log("Distance in feets is " + foots)
// }
// function inches(dist) {
//   var inch = dist * 39370.1
//   console.log("Distance in Inches is " + inch)
// }
// function centimeter(dist) {
//   var cm = dist * 100000
//   console.log("Distance in CentiMeters is " + cm)
// }
// meters(dist)
// feet(dist)
// inches(dist)
// centimeter(dist)

//Q9
// var time = parseInt(prompt("Enter working hours to find the overtime"))
// function CalOvertime(time) {
//   var pay
//   var overtime
//   if(time > 40) {
//     overtime = time - 40
//     pay = overtime * 12
//     console.log("Overtime is " + pay)
//   }
//   else {
//     console.log("No overtime")
//   }
// }
// CalOvertime(time)

//Q10
// var amount = parseInt(prompt("Enter amount to withdraw!"))
// function findNotes(amount) {
//   var hundred = Math.trunc(amount/100)
//   var fifty = Math.trunc((amount % 100) / 50)
//   var ten = Math.trunc(((amount % 100) % 50) / 10)
//   console.log("You will have " + hundred + " hundred notes, " + fifty + " fifty note, and " + ten + " ten notes")
// }
// findNotes(amount)