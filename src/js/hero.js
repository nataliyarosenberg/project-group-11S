document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.hero__button');
  const target = document.querySelector('#reviews');

  if (button && target) {
    button.addEventListener('click', () => {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
});
