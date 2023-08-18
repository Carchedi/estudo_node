const prompt = require('prompt-sync')();

function fillArray(n){
    let vals = [];
    for(i=0; i< n; i++){
        vals.push(Math.floor(Math.random() * 100) + 1)
    }
    return vals;
}

function merge(left, right) {
    let arr = [] 
    while (left.length && right.length) { 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    } 
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
     
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }



let l = prompt("Inform the array length :");
let arr = fillArray(l);

console.log(arr);
let r = mergeSort(arr);
console.log("Ordered array: "+r);

