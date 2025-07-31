//your JS code here. If required.
let messages = [];

function submitMessage() {
  const input = document.querySelector('input');
  const output = document.getElementById('output');
  const message = input.value.trim();

  if (message) {
    messages.push(message); 
    input.value = ''; 
  }

  if (messages.length > 0) {
    const msg = messages.shift(); 
    output.innerText = msg;

    setTimeout(() => {
      output.innerText = '';
    }, 2000);
  }
}

document.getElementById('submitBtn').addEventListener('click', submitMessage);