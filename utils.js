export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);
}

export function createElement(elementTag, innerHTML, className) {
  const element = document.createElement(elementTag);

  element.innerHTML = innerHTML;
  element.className = className;

  return element;
}

export function downloadText(filename, text) {
  const element = document.createElement("a");

  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text),
  );

  element.setAttribute("download", filename);

  element.style.display = "none";

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
