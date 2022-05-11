const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('.accordion__item');
const mediaQuery = window.matchMedia('(max-width: 767px)');

const useJs = () => {
  accordion.dataset.isJs = true;
};

const openedItem = (elem) => {
  if (elem.dataset.isOpen === 'true') {
    return true;
  }
  return false;
};

const onClickItem = (evt) => {
  if (mediaQuery.matches) {
    items.forEach((item) => {
      const trigger = item.querySelector('.accordion__trigger');
      if (item === evt.target.closest('.accordion__item')) {
        if (openedItem(trigger)) {
          trigger.dataset.isOpen = false;
        } else {
          trigger.dataset.isOpen = true;
        }
      } else {
        trigger.dataset.isOpen = false;
      }
    });
  }
};

const setClickAccordion = () => {
  items.forEach((item) => {
    item.addEventListener('click', onClickItem);
  });
};

export {useJs, setClickAccordion};
