const onClickElem = (evt) => {
  evt.preventDefault();

  const elem = evt.target.closest('a');

  if (elem) {
    const href = elem.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const btnConsultation = document.querySelector('a.promo__question');

const setOnClickBtnConsultation = () => {
  btnConsultation.addEventListener('click', onClickElem);
};

export {onClickElem, setOnClickBtnConsultation};
