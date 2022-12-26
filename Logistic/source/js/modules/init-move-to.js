let moveTo;

const initMoveTo = () => {
  moveTo = new MoveTo({
    duration: 800,
  });

  const triggerArray = document.querySelectorAll('.trigger');

  triggerArray.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(trigger.dataset.target);
      setTimeout(() => {
        moveTo.move(target);
      }, 500);
    });
  });
};

export {initMoveTo};
