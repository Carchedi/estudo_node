const prompt = require('prompt-sync')();

function toBinary(n){ 
    let binaryNum = new Array(32);
    let i = 0;
    let result = "";
    while (n > 0) {
        binaryNum[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }
    for (let j = i - 1; j >= 0; j--){
        result += binaryNum[j];
    }
    return result;
}

function maxGap(binary){
    let mgap = 0;
    let gap = 1;
    binary = binary.split('');
 
    for( i=1; i < binary.length; i++){
        if(binary[i] === binary [i-1]){
            gap++;
        }else{
            mgap = gap;
            gap = 1;
        }
    }

    if(gap > mgap){
        mgap = gap;
    }

    return mgap;
}


const n = prompt("Please, enter an integer number:");
console.log(n);
let b = toBinary(n);
console.log(b);
console.log("Max gap = "+maxGap(b))
