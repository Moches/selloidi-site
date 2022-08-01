// JavaScript by Moches (c) 2022
console.log('Sitio informativo en Certificación Sello IDI');
console.log('Con acceso a herramienta de auto-diagnóstico.');
console.log('Inclusión, Diversidad e Igualdad.');
console.log('(c) 2022 - Sello Idi');

const navSlide = () => {
  const toggle = document.querySelector('.toggle');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  console.log(toggle);
  console.log(nav);
  console.log(navLinks);

  toggle.addEventListener('click', () => {
    nav.classList.toggle('.nav-active');
  });
};

navSlide();
