let ColorsArr = ['#FCDE70', 'white', 'black', '#FD8B51'];
for (let i = 0; i < ColorsArr.length; i++) {
    $('.list-unstyled li').eq(i).css({ 'backgroundColor': ColorsArr[i] })

}

$('.list-unstyled li').click(function () {
    let currentolor = $(this).css('backgroundColor');
    $('.caption .changeTheme').css('color', currentolor);
});



$('.config-box').click(function () {
    let optionWidth = $('.color-options').outerWidth();

    if ($('.config-box').css('left') == '0px') {
        $('.config-box').animate({ 'left': -optionWidth }, 1000)
    }
    else {
        $('.config-box').animate({ 'left': '0px' }, 1000)
    }
});

let aboutOffset = $('#about').offset().top;

$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('.navbar').css({ 'backgroundColor': '#8E7755', 'transition': '2s' })
    }
    else {
        $('.navbar').css({ 'backgroundColor': 'transparent', 'transition': '2s' })
    }
    if ($(window).scrollTop() > aboutOffset) {
        $('#topBtn').fadeIn(1000);
    }
    if ($(window).scrollTop() < aboutOffset) {
        $('#topBtn').fadeOut(1000);
    }
});

$('.links li a').click(function () {

    let currentLink = $(this).attr('href');
    let currentOffset = $(currentLink).offset().top;
    $('body,html').animate({ scrollTop: currentOffset }, 1000);
});
$('#topBtn').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
});
$(window).ready(function(){
$('#loading').fadeOut(2000,function(){
    $('body').css('overflow','visible')
})
})