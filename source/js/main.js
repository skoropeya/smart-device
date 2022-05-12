import {iosVhFix} from './utils/ios-vh-fix';
import {setViewportWidth} from './utils/vw-fix';
import {setClickReadMore} from './modules/read-more';
import {setMask} from './modules/mask-phone';
import {setOnClickBtnConsultation} from './modules/slow-scroll';
import {useJs, setClickAccordion} from './modules/accordion';
import {onClickBtnOpenModal} from './modules/modal';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  useJs();
  setViewportWidth();
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    setClickReadMore();
    setMask();
    setOnClickBtnConsultation();
    setClickAccordion();
    onClickBtnOpenModal();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
