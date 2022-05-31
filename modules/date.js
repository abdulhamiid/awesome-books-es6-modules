import { DateTime } from './luxon.js';

const datePlaceholder = document.querySelector('#date');
const currentDate = () => {
  const dt = DateTime.now();
  datePlaceholder.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
};

export default currentDate;