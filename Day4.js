for(let i = 0; i<=10; i++){
    console.log(i);
}

console.log("..................");
for(let i = 1; i<=10; i++){
    console.log(i*5);
}
console.log("..................");

let i = 1
let sum = 0
while(i<=10){
    sum += i
    console.log(sum);
    i++
}
console.log("..................");
while(i>0){
    console.log(i);
    i--;
}

console.log("..................");
i =1
do{
    console.log(i);
    i++;
}while(i<=5)
    console.log("..................");
i=1
fact = 1
do{
    fact*=i
    console.log(fact);
    i++
}while(i<=5)

    console.log("..................");

for(let i = 1; i<=5; i++){
    for(let j =1; j<=i; j++){
        process.stdout.write("*");
    }
    console.log();
}


console.log("..................");


for(let i =1; i<=10; i++){
    if(i==5)
        continue;
    
    console.log(i);
}

console.log("..................");

for(let i =1; i<=10; i++){
    if(i==7)
        break;
    
    console.log(i);
}
