const photosSlider = document.querySelector('.slider-container');
const breakpointMob = window.matchMedia('(max-width:767px)');
let swiperPhotos;

const initPhotosSwiper = (slider, loop) => {
  swiperPhotos = new Swiper(slider, {
    slidesPerView: 1,
    loop: loop,
    breakpointsBase: 'container',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
};

const initPhotosSlider = () => {
  if (photosSlider) {
    const breakpointChecker = () => {
      if (!breakpointMob.matches) {
        if (swiperPhotos) {
          swiperPhotos.destroy();
          initPhotosSwiper(photosSlider, false);
        } else {
          initPhotosSwiper(photosSlider, false);
        }
      } else {
        if (swiperPhotos) {
          swiperPhotos.destroy();
          initPhotosSwiper(photosSlider, true);
        } else {
          initPhotosSwiper(photosSlider, true);
        }
      }
    };

    breakpointMob.addListener(breakpointChecker);
    breakpointChecker();
  }
};

export {initPhotosSlider};
