const modal = document.querySelector('.modal');
const btnClose = modal.querySelector('#btn-close');
const btnOpen = document.getElementById('request-call');

const keydownDocument = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';
  if (isEscKey) {
    evt.preventDefault();
    closeModal();
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

  btnClose.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', keydownDocument);
  modal.removeEventListener('click', onClickOverlay);
};

const openModal = () => {
  document.body.style.overflow = 'hidden';
  modal.dataset.isOpen = true;

  btnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', keydownDocument);
  modal.addEventListener('click', onClickOverlay);
};

const onClickBtnOpenModal = () => {
  btnOpen.addEventListener('click', openModal);
};

export {onClickBtnOpenModal};
