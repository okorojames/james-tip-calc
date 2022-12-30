const sumBtn = document.querySelector(".sum-btn");
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
  let percentageInput = document.querySelector(".percent-input").value.trim();
  if (billInput === "" || peopleInput === "" || percentageInput === "") {
    return;
  }
  billInput = Number(billInput);
  peopleInput = Number(peopleInput);
  percentageInput = Number(percentageInput) / 100;

  let AmountPerPerson = billInput / peopleInput;
  let totalTip = percentageInput * billInput;
  let totalTipPerPerson = totalTip / peopleInput;
  let totalAmountPerPerson = AmountPerPerson + totalTipPerPerson;
  let percentage = Math.round((totalTipPerPerson + Number.EPSILON) * 100) / 100;
  priceOne.textContent = percentage;
  priceTwo.textContent = totalAmountPerPerson;
  //
  //
  //
  document.querySelector(".bill-input").value = "";
  document.querySelector(".people-input").value = "";
  document.querySelector(".percent-input").value = "";
}
