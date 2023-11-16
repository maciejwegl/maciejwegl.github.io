
document.getElementsByClassName('hamburger')[0].addEventListener('click', function(){
    document.getElementsByClassName('menu-open')[0].classList.toggle('open');
})

document.getElementsByClassName('menu-close')[0].addEventListener('click', function() {
    document.getElementsByClassName('menu-open')[0].classList.toggle('open');
})