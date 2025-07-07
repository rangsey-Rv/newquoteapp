async function getQuote() {
  const res = await fetch('http://localhost:3000/api/quote');
  const data = await res.json();
  document.getElementById('quote').innerText = data.quote;
}
