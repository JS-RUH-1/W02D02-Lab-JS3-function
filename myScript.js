function calc(opp, number) {
  if (opp == "square") {
    return Math.pow(number, 2);
  } else if (opp == "cube") {
    return Math.pow(number, 3);
  }
}
function countVowels(word) {
  let arr = word.split("");
  let count = 0;
  arr.forEach((el) => {
    if (
      el == "a" ||
      el == "o" ||
      el == "u" ||
      el == "i" ||
      el == "e" ||
      el == "A" ||
      el == "O" ||
      el == "U" ||
      el == "I" ||
      el == "E"
    ) {
      count++;
    }
  });
  return count;
}
console.log(countVowels("hello"));
console.log(any("square", 5));

function handleClick(Element) {
  let e = document.getElementById("mySelect");
  let strUser = e.options[e.selectedIndex].value;
  let number = document.getElementById("number").value;
  let m = document.getElementById("result");
  m.innerHTML = "The result is: " + calc(strUser, number);
}

function vowelsCheck(Element) {
  let word = document.getElementById("text").value;

  let vowelsRes = document.getElementById("vowelsRes");
  vowelsRes.innerHTML = word + " has " + countVowels(word) + " vowels";
}
