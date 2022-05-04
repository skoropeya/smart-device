const btn = document.getElementById('btn-more-hide');
const hiddenText = document.getElementById('hidden-text');

const checkBtn = () => {
  if (btn.dataset.isOpen === 'true') {
    return true;
  }
  return false;
};

const onClickReadMore = (evt) => {
  evt.preventDefault();

  if (checkBtn()) {
    hiddenText.style.display = 'none';
    btn.dataset.isOpen = false;
  } else {
    hiddenText.style.display = 'block';
    btn.dataset.isOpen = true;
  }
};

const setClickReadMore = () => {
  btn.addEventListener('click', onClickReadMore);
};

export {setClickReadMore};
