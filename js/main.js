const sumBtn = document.querySelector(".sum-btn");
const percents = document.querySelectorAll(".tip-per-btn");
//
//
sumBtn.addEventListener("click", displaySum);
//
//
function displaySum() {
  //
  // Variables needed.
  //
  const priceOne = document.querySelector(".price-one");
  const priceTwo = document.querySelector(".price-two");
  let billInput = document.querySelector(".bill-input").value.trim();
  let peopleInput = document.querySelector(".people-input").value.trim();
  billInput = Number(billInput);
  peopleInput = Number(peopleInput);
  //
  //
  //
  let sum = billInput + peopleInput;
  console.log(sum);
  document.querySelector(".bill-input").value = "";
  document.querySelector(".people-input").value = "";
}
