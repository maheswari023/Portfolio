
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

document.getElementById('toggle-theme').addEventListener('click', function () {
  document.body.classList.toggle('glass-mode');
});



document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


const typingText = document.getElementById("typing-text");
const words = ["Web Development", "Coding", "Software Engineering"];
let wordIndex = 0, letterIndex = 0;

function type() {
    if (letterIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex][letterIndex++];
        setTimeout(type, 200);
    } else {
        setTimeout(deleteText, 1000);
    }
}
function deleteText() {
    if (letterIndex > 0) {
        typingText.textContent = typingText.textContent.slice(0, -1);
        letterIndex--;
        setTimeout(deleteText, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}
type();


window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

