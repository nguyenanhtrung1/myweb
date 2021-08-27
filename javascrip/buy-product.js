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

function time() {
    let today = new Date();
    let weekday=new Array(7);
    weekday[0]='Sunday';
    weekday[1]='Monday';
    weekday[2]='Tuesday';
    weekday[3]='Wednesday';
    weekday[4]='Thursday';
    weekday[5]='Friday';
    weekday[6]='Saturday';
    let day = weekday[today.getDay()];
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    nowTime = h+':'+m+':'+s;
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    today = day+', '+ yyyy+'/'+mm+'/'+dd;
    tmp='<span class="date">'+today+' | '+nowTime+'</span>';

    selectAll('.clock').innerHTML=tmp;

    clocktime=setTimeout('time()','1000','JavaScript');
    function checkTime(i)
    {
    if(i<10){
    i='0' + i;  
    }
    return i;
    }
}

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
    history.back();
}
back_triangle.onclick = () => {
    history.back();
}
//zoom-img



