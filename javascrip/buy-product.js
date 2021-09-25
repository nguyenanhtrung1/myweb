const selectAll = document.querySelector.bind(document);
const selectAlls = document.querySelectorAll.bind(document); 

const open_registration = selectAll('.js-log-in');
const form_registration = selectAll('.form_registration');
const close_registration = selectAll('.form-close');
const registration_bubbleSort = selectAll('.form');

open_registration.addEventListener('click',() => {
    form_registration.classList.add('form_registration2');
});

close_registration.addEventListener('click', () => {
    form_registration.classList.remove('form_registration2');
});

form_registration.addEventListener('click', () => {
    form_registration.classList.remove('form_registration2');
});
registration_bubbleSort.addEventListener('click', (event) => {
    event.stopPropagation();
})

// form-login

const open_login = selectAll('.js-login');
const form_login = selectAll('.login');
const close_login = selectAll('.login-close');
const login_bubbleSort = selectAll('.form2');   

open_login.addEventListener('click',() => {
    form_login.classList.add('login2');
});

close_login.addEventListener('click', () =>{
    form_login.classList.remove('login2');
});

form_login.addEventListener('click',() => {
    form_login.classList.remove('login2');
});
login_bubbleSort.addEventListener('click', (event) => {
    event.stopPropagation();
})

var main_menu_question = selectAll('.write-question');
var close_menu_question = selectAll('.close-menu-question');
var open_menu_question2 = selectAll('.open-menu-question2');

open_menu_question2.addEventListener('click', () => {
    main_menu_question.classList.add('write-question2')
})
close_menu_question.addEventListener('click', () => {
    main_menu_question.classList.remove('write-question2')
})

const back_main_product = selectAll('.back-index');
const back_triangle = selectAll('.triangle');

back_main_product.onclick = () => {
    location.href='./index.html';
}
back_triangle.onclick = () => {
    location.href='./index.html';
}
//zoom-img



