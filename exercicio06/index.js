const prompt = require('prompt-sync')();

function isPrime(n){
    for(i=2; i < n; i++){    
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

const n = prompt("Inform a natural number :");
if(isPrime(n)){
    console.log("Prime number");
}else{
    console.log("Compose number");
}