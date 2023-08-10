let displayresult = document.getElementById("display");

let buttons = document.getElementById("buTtons");
let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let numbReturned = "";
function btnclicked(numb) {
  return (displayresult.textContent = displayresult.textContent + numb);
}
function reduce() {
  numb = displayresult.textContent = "";
}
function add() {
  displayresult.textContent = displayresult.textContent + "+" + "";
}
function subtract() {
  displayresult.textContent = displayresult.textContent + "-" + "";
}
function multiply() {
  displayresult.textContent = displayresult.textContent + "*" + "";
}
function squareroot() {
  let sqrt = "√";
  return (displayresult.textContent = Math.sqrt(displayresult.textContent));
}
function divide() {
  displayresult.textContent = displayresult.textContent + "/" + "";
}
function percentage() {
  displayresult.textContent = displayresult.textContent + "%" + "";
}
function equalTo() {
  displayresult.textContent = displayresult.textContent + " ";
}
// <--------------------------------------------------------------------------------------->
function equalTo() {
  try {
    displayresult.textContent = eval(displayresult.textContent);
  } catch (error) {
    displayresult.textContent = "Error";
  }
}
