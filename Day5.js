function checkOdd(num){
    if(num%2 != 0){
        console.log(`Number is Odd`);
    }else{
        console.log(`Number is Even`);
    }
}
checkOdd(5);


function Square(num){
    console.log(`Square Of Number is ${num*num}`);
}
Square(5);


function findMax(num1, num2){
    if(num1>num2){
        console.log(`Number 1 is Greater`);
    }else{
        console.log(`Number 2 is Greater`);
    }
}
findMax(5,3);


function findMax(num1, num2){
   
        console.log(num1+num2);
    
}
findMax("Nirmal","kumar");



const sum = (num1, num2) => (num1+num2)
console.log(sum(5,6))



const checkArr = (arr, char) => {
    for (let element of arr) {
        if (element === char) {
            return true;
        }
    }
    return false;
};
// Example usage:
console.log(checkArr(['a', 'b', 'c'], 'b')); // Outputs: true



function findProd(num1, num2=10){
    return num1*num2
}
console.log(findProd(5,3));


function Greet(name, age=10){
    console.log(`Happy Burthday ${name} on your ${age} Bday`);
}
Greet("Nirmal")




const callFunctionMultipleTimes = (fn, times) => {
    for (let i = 0; i < times; i++) {
        fn();
    }
};

// Example function to be called
const sayHello = () => {
    console.log("Hello!");
};

// Calling the higher-order function
callFunctionMultipleTimes(sayHello, 5); // Outputs "Hello!" 5 times