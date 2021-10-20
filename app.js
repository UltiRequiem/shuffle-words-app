function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function download(filename, text) {
  const element = document.createElement("a");

  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

let clipboardBTNExists = false;
let clipboardBTN;

let fileBTNExists = false;
let fileBTN;

document.getElementsByTagName("footer")[0].innerHTML = document
  .getElementsByTagName("footer")[0]
  .innerHTML.replace("currentYear", new Date().getFullYear());

function shuffle() {
  let data = document.getElementById("words").value;

  const toLowerCase = document.getElementById("lowercase").checked;

  const toUpperCase = document.getElementById("uppercase").checked;

  if (toLowerCase) data = data.toLowerCase();

  if (toUpperCase) data = data.toUpperCase();

  const array = shuffleArray(data.split(" "));

  const answer = array.join(" ");

  document.getElementById("answer").innerHTML = answer;

  if (!clipboardBTNExists) {
    clipboardBTN = document.createElement("button");
    clipboardBTN.innerHTML = "Copy answer to clipboard.";

    document.getElementsByTagName("main")[0].appendChild(clipboardBTN);

    clipboardBTNExists = true;
  }

  clipboardBTN.onclick = copyToClipboard(answer);

  if (!fileBTN) {
    fileBTN = document.createElement("button");
    fileBTN.innerHTML = "Download the text in a txt";

    document.getElementsByTagName("main")[0].appendChild(fileBTN);

    fileBTNExists = true;
  }

  fileBTN.onclick = () => download("shuffle.txt", answer);

  return false;
}
