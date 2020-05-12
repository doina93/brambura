$(document).ready(function () {
    $('button.toggle-icons').click(function () {
        $('nav.custom-nav, .custom-nav-list').toggleClass('nav-background');
    });
    $('.blog-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        wrapAround: true
    });
});
