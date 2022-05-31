import createBook from './modules/instantiate.js';
import pageSwitcher from './modules/switcher.js';
import currentDate from './modules/date.js';

createBook();
currentDate();
setInterval(currentDate, 1000);
pageSwitcher();