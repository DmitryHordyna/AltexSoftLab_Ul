import data from './data/data.js';

let currentIndex = 1;

const refs = {
  listButton: document.querySelector('.hero-btn-box'),
  button: document.querySelectorAll('hero-button'),
  btn: document.querySelectorAll('.sc'),
  rightBtn: document.querySelector('.btn-right'),
  leftBtn: document.querySelector('.btn-left'),
  img: document.querySelector('.imgBig'),
  title: document.querySelector('.hero-box_title'),
  description: document.querySelector('.hero-box_description'),
};

refs.listButton.addEventListener('click', onSlide);
refs.rightBtn.addEventListener('click', nextSlide);
refs.leftBtn.addEventListener('click', previosliSlide);

function onSlide(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  cleanBox();

  const indexBtn = e.target.id;
  const classListTarget = e.target.classList;

  currentBtn();

  classListTarget.remove('hero-button');
  classListTarget.add('actives');

  searchIndex(indexBtn, classListTarget);
}

function nextSlide() {
  let newIndex = currentIndex + 1;
  if (newIndex > 5) {
    newIndex = 1;
  }
  currentBtn();

  searchBtn(newIndex);
  searchIndex(newIndex);
}

function previosliSlide() {
  let newIndex = currentIndex - 1;
  if (newIndex === 0) {
    newIndex = 5;
  }
  currentBtn();
  searchIndex(newIndex);
  searchBtn(newIndex);
}

function searchIndex(indexBtn) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == indexBtn) {
      refs.img.src = data[i].img;
      refs.title.textContent = data[i].title;
      refs.description.textContent = data[i].description;
      currentIndex = data[i].id;
      console.log();
    }
  }
}

function searchBtn(newIndex) {
  for (let i = 0; i < refs.btn.length; i++) {
    if (refs.btn[i].id == newIndex) {
      refs.btn[i].classList.remove('hero-button');
      refs.btn[i].classList.add('actives');
    }
  }
}

function cleanBox() {
  refs.title.textContent = '';
  refs.img.src = '';
  refs.description.textContent = '';
}
function currentBtn() {
  const currentActiveBtn = document.querySelector('.actives');

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('actives');
    currentActiveBtn.classList.add('hero-button');
  }
}
