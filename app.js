import { copyToClipboard, downloadText, shuffleArray } from "./utils.js";

let copyToClipboardBTN = false;
let donwloadFileBTN = false;

document.getElementsByTagName("footer")[0].innerHTML = document
  .getElementsByTagName("footer")[0]
  .innerHTML.replace("currentYear", new Date().getFullYear());

document.getElementById("principal_form").onsubmit = () => Main();

function Main() {
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

  if (!copyToClipboardBTN) {
    copyToClipboardBTN = document.createElement("button");
    copyToClipboardBTN.innerHTML = "Copy answer to clipboard.";
    copyToClipboardBTN.className = "sencondary_btn";

    document.getElementsByTagName("main")[0].appendChild(copyToClipboardBTN);
  }

  copyToClipboardBTN.onclick = copyToClipboard(answer);

  if (!donwloadFileBTN) {
    donwloadFileBTN = document.createElement("button");
    donwloadFileBTN.innerHTML = "Download the text in a txt";
    donwloadFileBTN.className = "sencondary_btn";
    document.getElementsByTagName("main")[0].appendChild(donwloadFileBTN);
  }

  donwloadFileBTN.onclick = () => downloadText("shuffle.txt", answer);

  return false;
}
