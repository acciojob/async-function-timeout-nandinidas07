let timeoutId=null;

function submitMessage() {
  const input = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const output = document.getElementById('output');

  const message = input.value.trim();
  const delay = parseInt(delayInput.value) || 0;

 if (message === "" || isNaN(delay)) return;

  output.innerText = message;


  if (timeoutId) clearTimeout(timeoutId);


  timeoutId = setTimeout(() => {
    output.innerText = "";
  }, delay);

  input.value = "";
  delayInput.value = "";
}

document.getElementById('btn').addEventListener('click', submitMessage);