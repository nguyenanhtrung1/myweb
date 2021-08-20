$(document).ready(() => {

    $(window).scroll(()=>{
        if($(this).scrollTop() > 200){
            $('.back-top').fadeIn();
        }
        else{
            $('.back-top').fadeOut();
        }
    })
    $('.back-top').click(() =>{
        $('html, body').animate({scrollTop : 0}, 800);
    })
})