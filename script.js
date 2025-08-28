// ======================
// Part 1: Basics
// ======================

// Variables + Conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are an adult!";
  } else if (age > 0) {
    result.textContent = "👶 You are still a minor!";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
}


// ======================
// Part 2: Functions
// ======================

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("totalResult").textContent =
    `Total Price = $${total}`;
}

// Function 2: Format a string
function formatString(text) {
  let formatted = text.toUpperCase();
  document.getElementById("formatResult").textContent =
    `Formatted: ${formatted}`;
}


// ======================
// Part 3: Loops
// ======================

// Loop 1: Countdown
function countdown(start) {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous
  for (let i = start; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Loop 2: List fruits using forEach
function listFruits() {
  let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
  let list = document.getElementById("fruitList");
  list.innerHTML = "";
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}


// ======================
// Part 4: DOM Manipulation
// ======================

// Change text content
function changeTitle() {
  document.querySelector("h1").textContent = "✨ Title Changed!";
}

// Toggle class
function toggleHighlight() {
  document.querySelector("h1").classList.toggle("highlight");
}

// Add new element
function addNewItem() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
}
