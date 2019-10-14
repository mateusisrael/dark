const img1 = './src/img/1.jpg';
const img2 = './src/img/2.jpg';
const img3 = './src/img/3.jpg';
const imagens = [img1, img2, img3];
let quadro = document.querySelector('#dark-img');
let left_arrow = document.querySelector('#left-arrow-cont');
let right_arrow = document.querySelector('#right-arrow-cont');
let left_arrow_mobile = document.querySelector('#mobile-left-arrow-cont');
let right_arrow_mobile = document.querySelector('#mobile-right-arrow-cont');
let i = 0;

window.onload = quadro.setAttribute('src', imagens[i]);



left_arrow.addEventListener('click', () => {
  console.log('LEFT');
  if(i > 0) {
    i--;
    quadro.setAttribute('src', imagens[i])
  }
})

right_arrow.addEventListener('click', () => {
  console.log('RIGHT');
  if(i < 2) {
    i++;
    quadro.setAttribute('src', imagens[i])
  }
});

left_arrow_mobile.addEventListener('click', () => {
  console.log('LEFT');
  if(i > 0) {
    i--;
    quadro.setAttribute('src', imagens[i])
  }
});

right_arrow_mobile.addEventListener('click', () => {
  console.log('RIGHT');
  if(i < 2) {
    i++;
    quadro.setAttribute('src', imagens[i])
  }
});
