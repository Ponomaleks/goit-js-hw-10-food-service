import menu from '../menu.json';
import menuTemplates from '../templates/menu.hbs';


const refs = {menuList: document.querySelector('.js-menu')};

const menuListItems = menu.map(menuTemplates).join('');
// console.log(menuListItems)
refs.menuList.insertAdjacentHTML('beforeend', menuListItems);