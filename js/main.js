const sumBtn = document.querySelector(".sum-btn");
const fivePer = document.querySelector(".five-per");
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
  // billInput.value = Number();
  let peopleInput = document.querySelector(".people-input").value.trim();
  // peopleInput.value = Number();
  //
  //
  //
  const sum = billInput.value + peopleInput.value;
  console.log(sum);
  document.querySelector(".bill-input").value = "";
  document.querySelector(".people-input").value = "";
}
