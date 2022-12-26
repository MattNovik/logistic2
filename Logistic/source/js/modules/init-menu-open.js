import {ScrollLock} from '../utils/scroll-lock';

const menuOpener = document.querySelector('.main-nav__toggle');
const menuCloser = document.querySelector('.main-nav__close');
const menuOverlay = document.querySelector('.main-nav__overlay');
const menuWrapper = document.querySelector('.main-nav__wrapper-mob');

const scrollLock = new ScrollLock();

const initOpenMenu = () => {
  const isEscEvent = (evt) => {
    return evt.key === 'Escape' || evt.key === 'Esc';
  };

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      scrollLock.enableScrolling();
      menuWrapper.classList.remove('main-nav__wrapper--open');
      menuOverlay.classList.remove('main-nav__overlay--open');
    }
  };

  menuOpener.addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollLock.disableScrolling();
    menuWrapper.classList.add('main-nav__wrapper--open');
    menuOverlay.classList.add('main-nav__overlay--open');
    document.addEventListener('keydown', onPopupEscKeydown);
  });

  menuCloser.addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollLock.enableScrolling();
    menuWrapper.classList.remove('main-nav__wrapper--open');
    menuOverlay.classList.remove('main-nav__overlay--open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });

  menuOverlay.addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollLock.enableScrolling();
    menuWrapper.classList.remove('main-nav__wrapper--open');
    menuOverlay.classList.remove('main-nav__overlay--open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });

  menuWrapper.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'A') {
      scrollLock.enableScrolling();
      menuWrapper.classList.remove('main-nav__wrapper--open');
      menuOverlay.classList.remove('main-nav__overlay--open');
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
  });
};

export {initOpenMenu};
