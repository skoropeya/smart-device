const btn = document.getElementById('btn-more-hide');
const hiddenTextAll = document.getElementById('hidden-text-all');
const hiddenTextMobile = document.getElementById('hidden-text-mobile');
const mediaQuery = window.matchMedia('(max-width: 767px)');

const openedBtn = () => {
  if (btn.dataset.isOpen === 'true') {
    return true;
  }
  return false;
};

const showText = () => {
  if (mediaQuery.matches) {
    hiddenTextMobile.style.display = 'inline';
  }

  hiddenTextAll.style.display = 'block';
  btn.dataset.isOpen = true;
};

const hideText = () => {
  if (mediaQuery.matches) {
    hiddenTextMobile.style.display = 'none';
  }

  hiddenTextAll.style.display = 'none';
  btn.dataset.isOpen = false;
};

const onClickReadMore = (evt) => {
  evt.preventDefault();

  if (openedBtn()) {
    hideText();
  } else {
    showText();
  }
};

const setClickReadMore = () => {
  btn.addEventListener('click', onClickReadMore);
};

export {setClickReadMore};
