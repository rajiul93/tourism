const locations = document.getElementsByClassName("p-btn");
const currentMoney1 = document.getElementById("current-money");
const selectedLocation = document.getElementById("selected-location");
const total = document.getElementById("total");
const withoutTravelTotal = document.getElementById("without-travel-total");

let sum = 0;

console.log(currentMoney1.innerText);
for (const location of locations) {
  location.addEventListener("click", function selectLocation(e) {
    const price = parseInt(
      e.target.parentNode.parentNode.childNodes[3].innerText
    );
    const name = e.target.parentNode.parentNode.childNodes[1].innerText;
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    somOfPrice(price);

    const currentMoney = parseInt(currentMoney1.innerText);
    if (currentMoney >= price) {
      total.innerText = sum;
      selectedLocation.appendChild(li);
      p1.innerText = name;
      p2.innerText = price;
      li.appendChild(p1);
      li.appendChild(p2);
      li.classList.add("flex", "justify-between", "p-4");
      withoutTravelTotal.innerText = sum;
      return;
    } else {
      alert("add money");
    }
  });
}
function somOfPrice(price) {
 
  const convertCurrentMoney = parseInt(currentMoney1.innerText);
  if(convertCurrentMoney>0){
    const remainingBalance = convertCurrentMoney - price;
    currentMoney1.innerText = remainingBalance;
      console.log(remainingBalance);
  }

  sum = sum + price;

  console.log("price: ", price);
}
function selectTravel(category) {
  if (selectedLocation.children.length >= 2) {
    if (category === "bus") {
      if (sum + 10 < 2000) {
        total.innerText = sum + 10;
      } else {
        alert("Add more  Balance for bus");
      }
    } else if (category === "train") {
      total.innerText = sum;
    } else if (category === "flyte") {
      if (sum + 30 < 2000) {
        total.innerText = sum + 10;
      } else {
        alert("Add more  Balance for Fly");
      }
    }
  } else {
    alert("select location");
  }
}
