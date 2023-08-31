let findRoom = document.querySelector(".room-button");
findRoom.addEventListener("click", Room);

function Room() {
  let type = prompt("what type of room are you looking for?");
  let budget = prompt("what is your budget?");

  if (budget > 200) {
    alert("10 results found");
  } else {
    alert("Sorry, try again later");
  }
}

function navigateToLogin() {
  // ... any other logic ...
  window.location.href = "form.html";
}
