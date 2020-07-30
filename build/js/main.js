document.querySelector('.header-menu-btn').onclick = function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
};

$(document).ready(function() {
    $("#phone").mask("+7 (999) 99-99-999");
});
