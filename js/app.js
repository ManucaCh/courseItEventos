function user(e) {
  if (e.keyCode === 13) {
    console.log(e.target.value);
    clearInput();
  }
}

function button() {
  const userName = document.getElementById("userInput").value;
  console.log(userName);
  clearInput();
}

function clearInput() {
  document.getElementById("userInput").value = "";
}
