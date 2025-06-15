//~ ======================================(1)============================================

// var number = +window.prompt("Enter number");
// console.log(number);

//! ======================================(2)============================================

// var number = +window.prompt("Enter number");
// if (number % 3 == 0 && number % 4 == 0) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

//! ======================================(3)============================================
// var number1 = +window.prompt("Enter number 1");
// var number2 = +window.prompt("Enter number 2");

// if (number1 > number2) {
//   console.log(number1);
// } else {
//   console.log(number2);
// }

//! ======================================(4)============================================

// var number = +window.prompt("Enter number");
// if (number == 0) {
//   console.log("Zero");
// } else if (number > 0) {
//   console.log("positive");
// } else {
//   console.log("negative");
// }

//! ======================================(5)============================================

// var number1 = +window.prompt("Enter number-1");
// var number2 = +window.prompt("Enter number-2");
// var number3 = +window.prompt("Enter number-3");

// if (number1 >= number2 && number1 >= number3) {
//   console.log("max :" + number1);
// } else if (number2 >= number1 && number2 >= number3) {
//   console.log("max :" + number2);
// } else {
//   console.log("max :" + number3);
// }

// if (number1 <= number2 && number1 <= number3) {
//   console.log("min :" + number1);
// } else if (number2 <= number1 && number2 <= number3) {
//   console.log("min :" + number2);
// } else {
//   console.log("min :" + number3);
// }

//! ======================================(6)============================================

// var number = +window.prompt("Enter number");

// if (number % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

//! ======================================(7)============================================

// var character = window.prompt("Enter character");

// if (
//   character == "a" ||
//   character == "A" ||
//   character == "e" ||
//   character == "E" ||
//   character == "l" ||
//   character == "I" ||
//   character == "o" ||
//   character == "O" ||
//   character == "U" ||
//   character == "u"
// ) {
//   console.log("vowel");
// } else {
//   console.log("Consonant");
// }

//! ======================================(8)============================================

// var number = +window.prompt("Enter number");

// for (var i = 1; i <= number; i++) {
//   console.log(i);
// }

//! ======================================(9)============================================

// var number = +window.prompt("Enter number");
// for (var i = 1; i <= 12; i++) {
//   console.log(i * number);
// }

//! ======================================(10)============================================

// var number = +window.prompt("Enter number");
// for (var i = 1; i <= number; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//! ======================================(11)============================================

// var base = +window.prompt("Enter base");
// var power = +window.prompt("Enter power");
// var res = 1;
// for (var i = 1; i <= power; i++) {
//   res *= base;
// }
// console.log(res);

//~ anther solution

// var base = +window.prompt("Enter base");
// var power = +window.prompt("Enter power");
// console.log(base ** power);

//! ======================================(12)============================================

// var subject1 = +window.prompt("Enter subject-1");
// var subject2 = +window.prompt("Enter subject-2");
// var subject3 = +window.prompt("Enter subject-3");
// var subject4 = +window.prompt("Enter subject-4");
// var subject5 = +window.prompt("Enter subject-5");
// var sum = subject1 + subject2 + subject3 +subject4 + subject5;
// var average = sum /  5;
// var percentage = (sum/500) * 100;
// console.log("Total marks :"+sum);
// console.log("Average Marks :"+average);
// console.log("Percentage :"+percentage);

//&  اسف علي العك دا  ممكتن تتحل ب الاري اسهل من كدا بس لسة ماخدموش
//^ الاقام الي في المثال مجمموعهم خطا وبالتالي النسبة و المتوسط خطا

//! ======================================(13)============================================

// var month = +window.prompt("Enter month number (1-12):");
// var days;
// if (month === 1 || month === 3 || month === 5 || month === 7 ||
//     month === 8 || month === 10 || month === 12) {
//   days = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   days = 30;
// } else if (month === 2) {
//   days = 28;
// } else {
//   days = "Invalid month number!";
// }
// console.log("Days in Month: " + days);

//! ======================================(14)============================================

// var physics = +window.prompt("Enter marks for Physics:");
// var chemistry = +window.prompt("Enter marks for Chemistry:");
// var biology = +window.prompt("Enter marks for Biology:");
// var math = +window.prompt("Enter marks for Mathematics:");
// var computer = +window.prompt("Enter marks for Computer:");

// var total = physics + chemistry + biology + math + computer;
// var percentage = (total / 500) * 100;

// var grade;
// if (percentage >= 90) {
//   grade = "A";
// } else if (percentage >= 80) {
//   grade = "B";
// } else if (percentage >= 70) {
//   grade = "C";
// } else if (percentage >= 60) {
//   grade = "D";
// } else if (percentage >= 40) {
//   grade = "E";
// } else {
//   grade = "F";
// }
// console.log("Percentage: " + percentage + "%");
// console.log("Grade: " + grade);

//! ======================================( Using switch case* )============================================
//! ======================================(15)============================================

// var month = +window.prompt("Enter month number (1-12):");
// var days;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     break;

//   case 2:
//     days = 28;
//     break;

//   default:
//     days = "Invalid month number!";
// }

// console.log("Days in Month: " + days);

//! ======================================(16)============================================

// var char = window.prompt("Enter an alphabet:");

//   switch (char) {
//     case 'a':
//     case 'A':
//     case 'e':
//     case 'E':
//     case 'i':
//     case 'I':
//     case 'o':
//     case 'O':
//     case 'u':
//     case 'U':
//       console.log(char + " is a Vowel.");
//       break;
//     default:
//       console.log(char + " is a Consonant.");
//   }

//! ======================================(17)============================================

// var num1 = +window.prompt("Enter first number:");
// var num2 = +window.prompt("Enter second number:");

// switch (true) {
//   case num1 > num2:
//     console.log("Maximum number is: " + num1);
//     break;

//   case num2 > num1:
//     console.log("Maximum number is: " + num2);
//     break;

//   case num1 === num2:
//     console.log("Both numbers are equal.");
//     break;

//   default:
//     console.log("Invalid input.");
// }

//! ======================================(18)============================================

// var number = +window.prompt("Enter a number:");

// switch (true) {

//   case (number % 2 === 0):
//     console.log(number + " is Even.");
//     break;

//   case (number % 2 !== 0):
//     console.log(number + " is Odd.");
//     break;

//   default:
//     console.log("Something went wrong.");
// }

//& anther solution

// var number = +window.prompt("Enter a number:");

// switch (number %2 ) {
//   case 0:
//     console.log(number + " is Even.");
//     break;
//   case 1:
//     console.log(number + " is Odd.");
//     break;

//   default:
//     console.log("Something went wrong.");
// }

//! ======================================(19)============================================

// var number = +window.prompt("Enter a number:");

// switch (true) {
//   case (number > 0):
//     console.log(number + " is Positive.");
//     break;

//   case (number < 0):
//     console.log(number + " is Negative.");
//     break;

//   case (number === 0):
//     console.log("The number is Zero.");
//     break;

//   default:
//     console.log("Something went wrong.");
// }

//! ======================================(20)============================================

// var num1 = +window.prompt("Enter first number:");
// var operator = prompt("Enter operator (+, -, *, /, %):");
// var num2 = +window.prompt("Enter second number:");

// switch (operator) {
//   case "+":
//     console.log("Result: " + (num1 + num2));
//     break;

//   case "-":
//     console.log("Result: " + (num1 - num2));
//     break;

//   case "*":
//     console.log("Result: " + num1 * num2);
//     break;
//   case "/":
//     if (num2 === 0) {
//       console.log("Error: Division by zero.");
//     } else {
//       console.log("Result: " + num1 / num2);
//     }
//     break;
//   case "%":
//     if (num2 === 0) {
//       console.log("Error: Modulo by zero.");
//     } else {
//       console.log("Result: " + (num1 % num2));
//     }
//     break;
//   default:
//     console.log("Invalid operator.");
// }



//! ======================================(Notes)============================================
// كل الامثلة دي ممكن اعمل ليها  validations

var number = +window.prompt("Enter  number:");

if(isNaN(number)){
    console.log("not number");      // not number 
    
}else{
   //................. write code   اكمل باقي الكود عادي
    
}
