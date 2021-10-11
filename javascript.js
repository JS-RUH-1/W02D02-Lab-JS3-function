// Vowels in the word
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(word) {
//   let x = 0;
//   for (let i = 0; i < vowels.length; i++) {
//     if (vowels.includes(word[i])) {
//       x++;
//     }
//   }
//   return console.log(x);
// }
// countVowels("Hello World");
// countVowels("aa");

// Square and cube the number

function calculate(fun, x) {
  if (fun == square) {
    square(x);
  } else if (fun == cube) {
    cube(x);
  }
}

function square(x) {
  console.log(x ** 2);
}

function cube(x) {
  console.log(x ** 3);
}

calculate(cube, 2);
