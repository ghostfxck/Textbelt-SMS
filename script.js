const num = document.getElementById("num")
const msg = document.getElementById("msg")
const test = document.getElementById("key")

function send() {
    fetch('https://textbelt.com/text', {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: "639321023284",
    message: "test",
    key: test,
  }),
}).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
});
}
