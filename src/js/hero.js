document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.hero__button');
  const target = document.querySelector('#review');

  if (button && target) {
    button.addEventListener('click', () => {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
});
