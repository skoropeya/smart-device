const items = document.querySelectorAll('.accordion__item');

const onClickItem = (evt) => {
  const item = evt.target.closest('.accordion__item');
  const trigger = item.querySelector('.accordion__trigger');



  if (trigger.dataset.isOpen === 'false') {
    trigger.dataset.isOpen = true;
  } else {

  }
  // console.log(trigger);
};

const setClickAccordion = () => {
  items.forEach((item) => {
    item.addEventListener('click', onClickItem);
  });
};

export {setClickAccordion};
