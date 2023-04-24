const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

/*just for info: querySelector is used to get an element, where classList is used to manipulate classes on the element, like remove or add*/ 

open.addEventListener('click', (/*here coming the parameteres*/) => container.classList.add('show-nav'));

close.addEventListener('click', (/*here coming the parameteres*/) => container.classList.remove('show-nav'));