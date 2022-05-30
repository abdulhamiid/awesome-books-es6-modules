import { DateTime } from "./luxon.js";
const datePlaceholder = document.querySelector('#date');
export const currentDate = () => {
  let dt = DateTime.now();
  datePlaceholder.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
}