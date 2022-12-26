const servicesItems = document.querySelectorAll('.modules-types__item');
const breakpointMob = window.matchMedia('(max-width:959px)');

const servicesInfo = () => {
  servicesItems.forEach((item) => {
    const itemInfo = item.querySelector('.modules-types__item-info');
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      itemInfo.classList.toggle('modules-types__item-info--open');
    });
  });
};

const initServicesInfo = () => {
  const breakpointChecker = () => {
    if (!breakpointMob.matches) {
      return;
    } else {
      servicesInfo();
    }
  };

  breakpointMob.addListener(breakpointChecker);
  breakpointChecker();
};

export {initServicesInfo};
