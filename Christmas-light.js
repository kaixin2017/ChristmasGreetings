const checkBoxCotainer = document.querySelector('.checkbox-container');
const lightSwitch = document.querySelector('.light-switch');
const lightBulbContainer = document.querySelector('.light-bulbs');

checkBoxContainer.addEventListener('click', e => {
    e.target.classList.toggle('active')
    lightSwitch.click();
});

lightSwitch.addEventListener('change', ()=>{
    lightBulbContainer.classList.toggle('on');
});