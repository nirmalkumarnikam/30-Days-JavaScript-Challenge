let num = 19;

if (num > 0) {
   console.log(num + " is Positive");
} else if (num < 0) {
   console.log(num + " is Negative");
} else {
   console.log(num + " is Zero");
}

let age = 20;

if (age >= 18) {
   console.log("You are eligible to vote");
} else {
   console.log("You are not eligible to vote");
}


let num1 = 10;
let num2 = 25;
let num3 = 20;

let large;

if (num1 >= num2) {
   if (num1 >= num3) {
      large = num1;
   } else {
      large = num3;
   }
} else {
   if (num2 >= num3) {
      large = num2;
   } else {
      large = num3;
   }
}

console.log("The Largest Number is " + large);



let dayNumber = 5
switch(dayNumber){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
}



let score = 99
switch (true) {
    case score >= 90:
       grade = 'A'
       break;
    case score >= 70:
       grade = 'B'
       break;
    case score >= 50:
       grade = 'C'
       break;
    case score >= 40:
       grade = 'D'
       break;
    case score >= 50:
       grade = 'E'
       break;
 
    default:
       grade = 'F'
       break;
 }



 let number = 50

 let result = (50%2 == 0)? "even":"odd"
 console.log(`The ${number} is ${result}`);


 let year = 1887
 if(year%4 == 0 && (year % 100 != 0 || year %400 ==0)){
    console.log("leap year");
 }else{
    console.log("not leap year");
 }