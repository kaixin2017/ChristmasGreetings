var checkBoxCotainer = document.querySelector('.checkbox-container');
var lightSwitch = document.querySelector('.light-switch');
var lightBulbContainer = document.querySelector('.light-bulbs');

checkBoxCotainer.addEventListener('click', e => {
    e.target.classList.toggle('active')
    lightSwitch.click();
});

lightSwitch.addEventListener('change', ()=> {
    lightBulbContainer.classList.toggle('on');
});