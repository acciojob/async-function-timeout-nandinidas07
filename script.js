let messages = [];

function submitMessage() {
  const input = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const output = document.getElementById('output');

  const message = input.value.trim();
  const delay = parseInt(delayInput.value) || 0;

  if (message) {
    messages.push({ text: message, delay });
    input.value = "";
    delayInput.value = "";
  }

  if (output.innerText === "" && messages.length > 0) {
    const current = messages.shift();
    output.innerText = current.text;

    setTimeout(() => {
      output.innerText = "";
    }, current.delay);
  }
}

document.getElementById('btn').addEventListener('click', submitMessage);