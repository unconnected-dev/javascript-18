'use strict';


const modal         = document.querySelector('.modal');
const overlay       = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//If document.querySelector matches multiple elements it only gets the first
// const btnsOpenModal = document.querySelector('.show-modal');
// console.log(btnsOpenModal);

//querySelectorAll will generate a NodeList which is kind of like an array
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);


for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener(
        'click', openModal
    );
}

//Do not include () as that would run as JavaScript executes the line
btnCloseModal.addEventListener(
    'click', closeModal
);

overlay.addEventListener(
    'click', closeModal
);


function openModal(){
    console.log(`${this.textContent}: Button clicked`);
    //Don't use . in this function, only in the selector
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal (){
    console.log("Close Modal");
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


document.addEventListener(
    'keydown', function(ev){
        console.log(`A key was pressed: ${ev.key}`);

        if(ev.key === 'Escape' && !modal.classList.contains('hidden'))
            closeModal();
    }
);