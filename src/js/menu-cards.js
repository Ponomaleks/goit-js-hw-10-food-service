import menu from '../menu.json';
import menuTemplates from '../templates/menu.hbs';

const menuList = document.querySelector('.js-menu');

const menuListItems = menu.map(menuTemplates).join('');

// console.log(menuListItems)
menuList.insertAdjacentHTML('beforeend', menuListItems);