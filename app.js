import {
  copyToClipboard,
  createElement,
  downloadText,
  shuffleArray,
} from "./utils.js";

let copyToClipboardBTN = false;
let donwloadFileBTN = false;

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

  if (!copyToClipboardBTN) {
    copyToClipboardBTN = createElement(
      "button",
      "Copy text to clipboard",
      "secondary_btn",
    );

    document.getElementById("extra_buttons").appendChild(
      copyToClipboardBTN,
    );
  }

  copyToClipboardBTN.onclick = copyToClipboard(answer);

  if (!donwloadFileBTN) {
    donwloadFileBTN = createElement(
      "button",
      "Download the text in a txt.",
      "secondary_btn",
    );

    document.getElementById("extra_buttons").appendChild(donwloadFileBTN);
  }

  donwloadFileBTN.onclick = () => downloadText("shuffle.txt", answer);

  return false;
}
