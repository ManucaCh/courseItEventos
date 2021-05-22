function user(action) {
  if (action.keyCode === 13) {
    console.log(action.target.value);
  }
}

function button() {
  var userName = document.getElementById("userInput").value;
  console.log(userName);
}
