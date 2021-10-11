// Vowels in the word
function vowel(name){
    let vowels = new Array('a','e','i','u','o');
    let count = 0;
    for(e in vowels){
        for(let i =0 ; i< name.length ; i++){
            if(name[i] == vowels[e]){
                count++;
            }
        }
    }
    return count;
}

console.log(vowel('khaled'));


// Square and cube the number
function operation(op, num){
    if(op == 'square'){
        return Math.pow(num,2);
    }
    return Math.pow(num,3);
}
console.log(operation('square',2));