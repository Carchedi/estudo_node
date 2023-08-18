const prompt = require('prompt-sync')();

function fibonacci(n){
    if (n == 1 || n == 2){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}


const n = prompt("Inform a natural number :");
console.log(fibonacci(n));