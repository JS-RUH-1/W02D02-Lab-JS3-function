// Lab JS Functions 11/10/2022 -- Abdulsalam Aldawsari
//Vowels counter
let name = "malole"
function vowelsCount (n){
    let numTimes = 0
    for(let i =0;i<n.length;i++){
        if(n[i]=="a"||n[i]=="o"||n[i]=="e"||n[i]=="i"||n[i]=="u"){
            numTimes++;
        }
    }
    return numTimes;
}
console.log(vowelsCount(name))

//Cube Square 
function cubeSqare(op , n){
    if(op==2){
        return n*n
    }
    else if(op==3){
        return n*n*n
    }
    return "Please choos 2 for square . 3 for cube"
    
}
// Choos 2 for square - 3 for cube 
console.log(cubeSqare(2,5));
