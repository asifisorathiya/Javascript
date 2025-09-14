let txtInput = 0,
  score = 20,
  highscore = 0,
  currentValue = Math.trunc(Math.random() * 20) + 1;

contentWriter(".score", score);

//contentWriter(".number", currentValue);

function contentWriter(elementName, contentValue) {
  document.querySelector(elementName).textContent = contentValue;
}

document.querySelector(".check").addEventListener("click", function () {
  txtInput = Number(document.querySelector(".guess").value);
  console.log(txtInput);
  if (txtInput === 0) {
    alert("Please enter the value");
    contentWriter(".number", "?");
  } else if (txtInput === currentValue) {
    contentWriter(".message", "You Won");
    contentWriter(".number", currentValue);
    if (currentValue > highscore) {
      highscore = currentValue;
      contentWriter(".highscore", highscore);
      contentWriter(".score", 20);
    }
  } else {
    contentWriter(".number", "?");
    if (txtInput < currentValue) {
      contentWriter(".message", "Too Low!");
    } else {
      contentWriter(".message", "Too High!");
    }
    score--;
    contentWriter(".score", score);
    if (score < 0) {
      contentWriter(".score", 20);
    }
  }
  currentValue = Math.trunc(Math.random() * 20) + 1;
});

//clock on again i.e reset
document.querySelector(".again").addEventListener("click", function () {
  contentWriter(".number", "?");
  document.querySelector(".guess").value = "";
  contentWriter(".message", "Start guessing...");
  contentWriter(".score", 20);
  contentWriter(".highscore", 0);
});
