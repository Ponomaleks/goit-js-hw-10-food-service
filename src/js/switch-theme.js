const refs = {
    body: document.body,
    checkbox: document.getElementById('theme-switch-toggle')
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function setThemeOnLoad() {
    if (localStorage.getItem("theme")){
        refs.body.classList.add(localStorage.getItem("theme"))
        if (localStorage.getItem("theme") === Theme.DARK)
            {refs.checkbox.checked = true}
                else {
                    refs.checkbox.checked = false;
                    refs.body.classList.add(Theme.LIGHT)
                    };
    }
    else {refs.body.classList.add(Theme.LIGHT)};
};
setThemeOnLoad();

refs.checkbox.addEventListener('change', changeColorTheme);

function changeColorTheme(e) {
        document.body.classList.toggle(Theme.DARK)
        document.body.classList.toggle(Theme.LIGHT)
    if (e.target.checked) {
        localStorage.setItem("theme", Theme.DARK)
    }
    else {
        localStorage.setItem("theme", Theme.LIGHT)
    }
    };


