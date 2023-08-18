const prompt = require('prompt-sync')();
let vetorAlfabeto = ["A","B","C","D","E"]

function rotate(arr, n){
    n = n % 2;
    var res = [];
    if( n > 0){
         while(arr.length > 0){
            var l = arr.pop();
            res.push(l);
         }
    }else{
        res = arr;
    }
    return res;
}

const n = prompt("How many time should the vector rotates?")
console.log("Original vector: "+vetorAlfabeto);
vetorAlfabeto = rotate(vetorAlfabeto, n); 
console.log("Rotationed vector: "+vetorAlfabeto);