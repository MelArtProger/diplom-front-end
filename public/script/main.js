$('.up-btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, '3000');
    });

const hideMenu = document.querySelector('#hidden-menu');
const showMenu = document.querySelector('#show-menu');

const handleClick = () => {
    const isOpened = hideMenu.dataset.opened === 'true';

    if (isOpened) {
        $('#hidden-menu').animate({
            'left': '-60%'
        }, 1000);
        $('body').animate({
            'width': '100%',
            'margin-left': '0'
        }, 1000);
        $('.menu').animate({
            'margin-left': '2%'
        }, 1000);
    } else {
        if ($(window).width() >= 576) {
            $('#hidden-menu').animate({
                'left': '0'
            }, 1000);
            $('body').animate({
                'width': '75%',
                'margin-left': '22.5%'
            }, 1000);
            $('.menu').animate({
                'margin-left': '0'
            }, 1000);
        } else if ($(window).width() >= 321) {
            $('#hidden-menu').animate({
                'left': '0'
            }, 1000);
            $('body').animate({
                'width': '65%',
                'margin-left': '32.5%'
            }, 1000);
            $('.menu').animate({
                'margin-left': '0'
            }, 1000);
        } else {
            $('#hidden-menu').animate({
                'left': '0',
                'z-index': '1'
            }, 1000);
            $('body').animate({
                'width': '100%',
                'margin-left': '0',
                'z-index': '-1'
            }, 1000);
            $('.menu').animate({
                'margin-left': '55%'
            }, 1000);
        }
    };

    hideMenu.dataset.opened = !isOpened;

};

showMenu.addEventListener('click', handleClick);

