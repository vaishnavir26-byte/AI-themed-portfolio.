
// =====================
// TYPING EFFECT
// =====================
const texts = ["AI Developer", "IoT Engineer", "Full Stack Builder"];

let i = 0;
let j = 0;

function type() {
  let el = document.querySelector(".typing");

  el.innerText = texts[i].slice(0, j);
  j++;

  if (j > texts[i].length) {
    j = 0;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, 150);
}
type();


// =====================
// BUTTON ACTION
// =====================
function startAI() {
  alert("AI Portfolio Activated 🤖");
}


// =====================
// SMOOTH SCROLL EFFECT (optional enhancement)
// =====================
document.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
  });
});