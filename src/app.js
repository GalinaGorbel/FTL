import './scss/base.scss'

"use strict";

let arrows = document.querySelectorAll('.select__dropdown');

for (let arrow of arrows) {
    arrow.addEventListener('click', (e) => {

        e.preventDefault();

        const selectBlock = arrow.querySelector('.select__block'),
            selectValue = arrow.querySelector('.select__value');

        if (selectBlock) {
            selectBlock.classList.toggle('select__block_hidden');
    
            selectValue.innerHTML = e.target.innerHTML;
            
            selectValue.innerHTML != 'Не выбрана' ? selectValue.style.color = 'black' : selectValue.style.color = '#CFCFCF';
        }
    })
}