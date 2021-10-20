function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

let clipboardButton = false;
let btn;

function shuffle() {
  let data = document.getElementById("words").value;

  const toLowerCase = document.getElementById("lowercase").checked;
  const toUpperCase = document.getElementById("uppercase").checked;

  if (toLowerCase) data = data.toLowerCase();

  if (toUpperCase) data = data.toUpperCase();

  const array = shuffleArray(data.split(" "));

  const answer = array.join(" ");

  document.getElementById("answer").innerHTML = answer;

  if (!clipboardButton) {
    btn = document.createElement("button");
    btn.innerHTML = "Copy answer to clipboard.";
    document.body.appendChild(btn);
    clipboardButton = true;
  }

  btn.onclick = copyToClipboard(answer);

  return false;
}
