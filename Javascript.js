function vowelsCalc(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "A" ||
      word[i] === "o" ||
      word[i] === "O" ||
      word[i] === "e" ||
      word[i] === "E" ||
      word[i] === "u" ||
      word[i] === "U" ||
      word[i] === "i" ||
      word[i] === "I"
    ) {
      count++;
    }
  }
  return count;
}

function calcSorQ(operation, num) {
  let res = 0;
  if (operation == "square") {
    res = Math.pow(num, 2);
  }
  if (operation == "cube") {
    res = Math.pow(num, 3);
  }
  return res;
}

function handleClick(Element) {
  $("#prospects_form").submit(function (Element) {
    Element.preventDefault(); // <==stop page refresh==>
  });

  let vowelsH3 = document.getElementById("vowelsH3");
  let numberH3 = document.getElementById("numberH3");
  let wordfromUser = document.getElementById("wordEnterd").value;
  let operationFromUser = document.getElementById("operationFromUser").value;
  let numFromUser = document.getElementById("number").value;
  vowelsH3.innerHTML = `The total number of vowels = ${vowelsCalc(
    wordfromUser
  )}`;
  numberH3.innerHTML = `The number after the calculation  = ${calcSorQ(
    operationFromUser,
    numFromUser
  )}`;
}
