 function alone(vet){
    let alt = false;
    for( var i in vet){ 
        for (j in vet){
            if (vet[i] == vet[j] && j!=i){ 
                vet[j] = '*'; 
                alt = true;
            }
        }
        if (alt){
            vet[i] = '*'
            alt = false;
        }
    }

    for( var i = 0; i < vet.length; i++){
        if (vet[i] === '*'){
            vet.splice(i, 1)
            i-=1;
        };
    }
    return vet;
}

let vetor = ["a", "b", "a", "a", "c", "b"] 
console.log(alone(vetor));