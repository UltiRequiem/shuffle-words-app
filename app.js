import { shuffleArray, copyToClipboard, download } from "./utils.js";

let clipboardBTNExists = false;
let clipboardBTN;

let fileBTNExists = false;
let fileBTN;

document.getElementsByTagName("footer")[0].innerHTML = document
  .getElementsByTagName("footer")[0]
  .innerHTML.replace("currentYear", new Date().getFullYear());

window.shuffle = shuffle;

function shuffle() {
  let data = document.getElementById("words").value;

  if (data === "") return false;

  const toLowerCase = document.getElementById("lowercase").checked;

  const toUpperCase = document.getElementById("uppercase").checked;

  if (toLowerCase) data = data.toLowerCase();

  if (toUpperCase) data = data.toUpperCase();

  const array = shuffleArray(data.split(" "));

  const answer = array.join(" ");

  document.getElementById("answer").innerHTML = answer;
  document.getElementById("answer").style = "display: block";

  if (!clipboardBTNExists) {
    clipboardBTN = document.createElement("button");
    clipboardBTN.innerHTML = "Copy answer to clipboard.";
    clipboardBTN.className = "sencondary_btn";

    document.getElementsByTagName("main")[0].appendChild(clipboardBTN);

    clipboardBTNExists = true;
  }

  clipboardBTN.onclick = copyToClipboard(answer);

  if (!fileBTNExists) {
    fileBTN = document.createElement("button");
    fileBTN.innerHTML = "Download the text in a txt";
    fileBTN.className = "sencondary_btn";

    document.getElementsByTagName("main")[0].appendChild(fileBTN);

    fileBTNExists = true;
  }

  fileBTN.onclick = () => download("shuffle.txt", answer);

  return false;
}
