window.addEventListener('load', function () {
  document.querySelector('body').classList.add("loaded")
});

new SimpleSlide({
  slide: 'principal',
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  time: 15000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});