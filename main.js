const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + "px";
}

document.addEventListener('DOMContentLoaded', () => {
  const encryptButton = document.querySelector('.crip');
  const decryptButton = document.querySelector('.descrip');
  const inputText = document.querySelector('.inputMessage');
  const outputDiv = document.querySelector('.outputSession');
  const innerDiv = document.createElement('div');
  const outputText = document.createElement('p');
  const copyButton = document.createElement('button');

  innerDiv.setAttribute("class", "innerDiv");
  copyButton.textContent = 'Copiar';
  copyButton.setAttribute("class", "copyBtn");

  encryptButton.addEventListener('click', () => {
    const text = inputText.value;
    const encryptedText = encryptText(text);
    displayOutput(encryptedText);
  });

  decryptButton.addEventListener('click', () => {
    const text = inputText.value;
    const decryptedText = decryptText(text);
    displayOutput(decryptedText);
  });

  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(outputText.textContent).then(() => {
      copyButton.textContent = "Texto copiado!";
      setTimeout(() => {
        copyButton.textContent = 'Copiar';
      }, 1500);
    });
  });

  function displayOutput(text) {
    outputText.textContent = text;
    outputDiv.innerHTML = '';
    innerDiv.appendChild(outputText);
    innerDiv.appendChild(copyButton);
    outputDiv.appendChild(innerDiv);
  }

  function encryptText(text) {
    return text.replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  }

  function decryptText(text) {
    return text.replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  }
});