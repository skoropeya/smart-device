const modal = document.querySelector('.modal');
const btnClose = modal.querySelector('#btn-close');
const btnOpen = document.getElementById('request-call');
let lastFocusedElement;

const focusableElements = Array.from(modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input:not([disabled]),  select:not([disabled]), [tabindex], audio[controls]:not([disabled]), video[controls]:not([disabled])'));

const firstFocusableElem = focusableElements[0];
const lastFocusableElem = focusableElements[focusableElements.length - 1];

const keydownDocument = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';
  if (isEscKey) {
    evt.preventDefault();
    closeModal();
  }

  if (evt.keyCode === 9) {

    if (evt.shiftKey) {

      if (document.activeElement === firstFocusableElem) {
        evt.preventDefault();
        lastFocusableElem.focus();
      }

    } else {
      if (document.activeElement === lastFocusableElem) {
        evt.preventDefault();
        firstFocusableElem.focus();
      }
    }
  }
};

const onClickOverlay = (evt) => {
  if (evt.target.closest('.modal__overlay')) {
    closeModal();
  }
};

const closeModal = () => {
  document.body.style.overflow = 'auto';
  modal.dataset.isOpen = false;

  lastFocusedElement.focus();

  btnClose.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', keydownDocument);
  modal.removeEventListener('click', onClickOverlay);
};

const openModal = () => {
  document.body.style.overflow = 'hidden';
  modal.dataset.isOpen = true;

  lastFocusedElement = document.activeElement;
  focusableElements.find((elem) => elem.id === 'request-call-name').focus();

  btnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', keydownDocument);
  modal.addEventListener('click', onClickOverlay);
};

const onClickBtnOpenModal = () => {
  btnOpen.addEventListener('click', openModal);
};

export {onClickBtnOpenModal};
