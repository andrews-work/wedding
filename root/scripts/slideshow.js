const images = document.querySelectorAll('section img');
let index = 0;

setInterval(() => {
  // hide current image
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  // show next image
  images[index].classList.add('active');
}, 3000);







const buttons = document.querySelectorAll('.slideshow-button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showSlide(index);
  });
});