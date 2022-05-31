const switcher = document.querySelectorAll('[data-switcher]');

const pageSwitcher = () => {
  for (let i = 0; i < switcher.length; i += 1) {
    const dataSwitch = switcher[i];
    const pageId = dataSwitch.dataset.tab;
    dataSwitch.addEventListener('click', () => {
      document.querySelector('.is-Active').classList.remove('is-Active');
      dataSwitch.classList.add('is-Active');
      document.querySelectorAll('.page').forEach((page) => { page.classList.remove('is-Active'); });
      const nextPage = document.querySelector(`.home-page .page[data-page = "${pageId}"]`);
      nextPage.classList.add('is-Active');
    });
  }
};

export default pageSwitcher;