export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export function download(filename, text) {
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
