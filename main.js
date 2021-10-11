function vowelCount(name) {
  let num = 0,
    vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < name.length; i++) {
    let temp = name[i];
    vowels.includes(name[i].toLowerCase()) ? num++ : null;
  }
  return num;
}
let name = "Yasser";
console.log("Number of vowels in name: " + vowelCount(name));

function operation(type, num) {
  let value = 0;
  type.toLowerCase() == "square"
    ? (value = num ** 2)
    : type.toLowerCase() == "cube"
    ? (value = num ** 3)
    : (value = -1);
  switch (value) {
    case -1:
      console.log("Unaccepted operation");
      break;
    default:
      console.log(type.toUpperCase() + " of " + num + " = " + value);
  }
  return value;
}
let value = operation("cube", 10);
