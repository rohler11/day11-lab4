"use strict";
// 1. Create four buttons. Each button represents a different product with a different price. Also display a total, which starts at $0.00. Whenever a button is clicked, update the total by adding the price of that item.
//
//
// const foodSelection = document.querySelectorAll(".btn");
// foodSelection.forEach((button) => {
//   button.style.fontSize = "32px";
//   button.style.backgroundColor = "lightYellow";
//   button.style.borderRadius = "5px";
//   button.style.border = "5px solid yellow";
//   button.style.borderStyle = "groove";
//   button.style.color = "teal";
// });
// let btn = document.querySelectorAll(".btn");
// let total = 0;
// btn.forEach((button) => {
//   button.addEventListener("click", () => {
//     let amount = parseInt(button.getAttribute("data-amount"));
//     total += amount;
//     let totalParagraph = document.querySelector(".total");
//     totalParagraph.innerText = total;
//   });
// });
//
//
// 2. Create a form with two inputs: a number input (or range input) for count and a select input for the type of coin: Penny, Nickel, Dime, or Quarter.
//
// const coinSelection = document.querySelectorAll(".moneyButton");
// coinSelection.forEach((button2) => {
//   button2.style.fontSize = "32px";
//   button2.style.backgroundColor = "lightYellow";
//   button2.style.borderRadius = "5px";
//   button2.style.border = "5px solid yellow";
//   button2.style.borderStyle = "groove";
//   button2.style.color = "teal";
// });
// const dime = document.querySelectorAll(".dime");
// dime.forEach((dime) => {
//   dime.style.fontSize = "20px";
//   dime.style.height = "25px";
//   dime.style.width = "25px";
//   dime.style.backgroundColor = "lightGray";
//   dime.style.borderRadius = "50%";
// });
// const quarter = document.querySelectorAll(".quarter");
// quarter.forEach((quarter) => {
//   quarter.style.fontSize = "20px";
//   quarter.style.height = "30px";
//   quarter.style.width = "30px";
//   quarter.style.backgroundColor = "gray";
//   quarter.style.borderRadius = "50%";
// });
// const penny = document.querySelectorAll(".penny");
// penny.forEach((penny) => {
//   penny.style.fontSize = "20px";
//   penny.style.height = "15px";
//   penny.style.width = "15px";
//   penny.style.backgroundColor = "brown";
//   penny.style.borderRadius = "50%";
// });
// const nickel = document.querySelectorAll(".nickel");
// nickel.forEach((nickel) => {
//   nickel.style.fontSize = "20px";
//   nickel.style.height = "20px";
//   nickel.style.width = "20px";
//   nickel.style.backgroundColor = "silver";
//   nickel.style.borderRadius = "50%";
// });

// let coinTime = document.createElement("div");
// coinTime.setAttribute("class", event);
// coinTime.addEventListener("click", (event) => {
//   coinz.append(coinTime);
// });

// 3. Start with a “light bulb” div and four buttons. The light bulb starts off with a dark background.
//     ● When the “on” button is clicked, the background changes to light (or remains light if it was already light)
//     ● When the “off” button is clicked, the background changes to dark (or remains dark if it was already dark)
//     ● When the “toggle” button is clicked, the background changes to light if it was dark and dark if it was light.
// ● When the “end” button is clicked, the light bulb div is completely removed from the page (not just hidden) and the four buttons become disabled.
//
// const bulbBtn = document.querySelectorAll(".bulbBtn");
// bulbBtn.forEach((button) => {
//   button.style.fontSize = "32px";
//   button.style.backgroundColor = "lightYellow";
//   button.style.borderRadius = "5px";
//   button.style.border = "5px solid yellow";
//   button.style.borderStyle = "groove";
//   button.style.color = "teal";
// });

let lightBulb = document.querySelector(".bulb");
lightBulb.style.backgroundColor = "grey";
lightBulb.style.color = "white";
lightBulb.style.borderRadius = "10px";
lightBulb.style.padding = "10px";

let onSwitch = document.querySelector(".on");
onSwitch.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "lightGrey";
});

let offSwitch = document.querySelector(".off");
offSwitch.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "grey";
});

let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  if (lightBulb.classList.toggle(".on")) {
    lightBulb.style.backgroundColor = "grey";
  } else {
    lightBulb.style.backgroundColor = "lightGrey";
  }
});

let endSwitch = document.querySelector(".end");
endSwitch.addEventListener("click", () => {
  lightBulb.classList.remove(".bulb", ".on", ".off");
  endSwitch.getElementById(".butt").disabled = true;
});
