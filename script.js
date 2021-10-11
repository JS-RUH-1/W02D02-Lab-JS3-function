const countVowels = (str) => str.match(/[aeiou]/gi).length;
console.log( countVowels("emad") );

const squareOrCube = (type, num) => {
    // validation
    if(!["square","cube"].includes(type)) return Error("wrong method");
    if(typeof num !== "number") return Error("second parameter should be a number");
    // method
    return Math.pow(num, type === "square" ? 2 : 4);
}
console.log( squareOrCube("square",5) );