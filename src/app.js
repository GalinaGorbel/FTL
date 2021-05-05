import './scss/base.scss'

"use strict";

let selects = document.querySelectorAll('.select__dropdown');

for (let select of selects) {
    select.addEventListener('click', (e) => {

        e.preventDefault();

        const selectBlock = select.querySelector('.select__block'),
            selectValue = select.querySelector('.select__value');

        if (selectBlock) {
            selectBlock.classList.toggle('select__block_hidden');
    
            selectValue.innerHTML = e.target.innerHTML;
            
            selectValue.innerHTML != 'Не выбрана' ? selectValue.style.color = 'black' : selectValue.style.color = '#CFCFCF';
        }
    })
}