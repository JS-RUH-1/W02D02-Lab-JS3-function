let myName = "Turki"

function vowels(n) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0
    for (let n1 of n.toLowerCase()) {
        if (vowels.includes(n1)) {
            count++;
        }
    }

    return count
}

console.log(vowels(myName));

function SquareCudeExample(str, num) {
    if(str == "square") {
        let result = num * num

        return result
    } else {
        return num * num * num 
    }
}

// console.log(SquareCudeExample("square", 2));
console.log(SquareCudeExample("cude", 3));

