/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let currentIndex = 0;

const carouselCreator = () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  
  leftButton.addEventListener('click', () => {
    if(currentIndex === 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex--;
    }
    image.src = images[currentIndex];
  });

  const images = [
    './assets/carousel/mountains.jpeg',
    './assets/carousel/computer.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg'
  ]

  const image = document.createElement('img');
  image.src = images[currentIndex];

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';

  rightButton.addEventListener('click', () => {
    if(currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    image.src = images[currentIndex];
  });

  carousel.appendChild(leftButton);
  carousel.appendChild(image);
  // carousel.appendChild(image2);
  // carousel.appendChild(image3);
  // carousel.appendChild(image4);
  carousel.appendChild(rightButton);

  carouselContainer.appendChild(carousel);

  return carousel;
};

carouselCreator();
