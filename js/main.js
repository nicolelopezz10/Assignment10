let figure1 = document.querySelector('#figure1');
let caption2 = document.querySelector('#caption2');
let caption1 = document.querySelector('#caption1')


caption2.style.display='none'

figure1.onclick = () => {
  if(figure1.getAttribute('src')==='images/puppyCorgi.jpg'){
    figure1.setAttribute('src','images/grownCorgi.jpg')
    caption1.style.display = 'none';
    caption2.style.display='block'

  } else {
    figure1.setAttribute('src','images/puppyCorgi.jpg')

  }
}


const image = document.querySelector('#figure3');
const text1 = document.querySelector('#caption3')

image.onmouseenter = (e) => {
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
};

image.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
 }
