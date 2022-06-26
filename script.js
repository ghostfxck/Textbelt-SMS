const num = document.getElementById("num")
const msg = document.getElementById("msg")
const test = document.getElementById("key")

function send() {
    fetch('https://textbelt.com/text', {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: `${num}`,
    message: `${msg}`,
    key: `${key}`,
  }),
}).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
});
}
