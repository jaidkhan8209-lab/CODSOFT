const bgContainer = document.querySelector('.bg-container');
const particleCount = 60; // Kitne particles chahiye

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Random size (kuch bade, kuch bohot chhote)
  const size = Math.random() * 4 + 1; // 1px se 5px tak
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Random horizontal position
  particle.style.left = `${Math.random() * 100}vw`;

  // Random animation duration aur delay taaki sab ek sath na chalein
  const duration = Math.random() * 15 + 10; // 10s se 25s ke beech
  const delay = Math.random() * -20; // Pehle se chalte hue dikhein

  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;

  // Kuch particles ka color cyan aur kuch ka pure white/blue karne ke liye
  if (Math.random() > 0.5) {
    particle.style.background = 'rgba(168, 85, 247, 0.5)'; // Purple tone
    particle.style.boxShadow = '0 0 8px rgba(168, 85, 247, 0.7)';
  }

  bgContainer.appendChild(particle);
}


const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.querySelector(".btn-primary")
.addEventListener("click", () => {

  document.querySelector("#contact")
  .scrollIntoView({
    behavior:"smooth"
  });

});

const cards = document.querySelectorAll(
".about-card,.edu-card,.skill-card,.contact-card"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

cards.forEach(card => observer.observe(card));

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display =
    window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky");
  }

});