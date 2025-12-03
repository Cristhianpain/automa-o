let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar ou retroceder o slide
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Função principal para exibir o slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  
  // Se o índice for maior que o número de slides, volta para o primeiro
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  // Se o índice for menor que 1, vai para o último slide
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Exibe o slide atual
  slides[slideIndex-1].style.display = "block";
}
