const datePlaceholder = document.querySelector('#date');

export const currentDate = () => {
  datePlaceholder.textContent = new Date();
}