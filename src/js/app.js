// slideshow for main images
let imgs = new Array("src/img/top.jpg", "src/img/top2.jpg", "src/img/top3.jpg", "src/img/top4.jpg");
let num = -1;

slideshow_timer();

function slideshow_timer() {
  if (num == 3) {
    num = 0
  } else {
    num ++
  }
  document.getElementById("main_img").src=imgs[num];
  setTimeout("slideshow_timer()", 5000)
}

// top button 
const PageTopBtn = document.getElementById('js-scroll-top');
PageTopBtn.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// hamburder menu
const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');
const close_two = document.getElementById('close_two');


open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
});

close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

close_two.addEventListener('click', () => {
  // overlay.classList.remove('show');
  // open.classList.remove('hide');
});

const clickedMenu = () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
}