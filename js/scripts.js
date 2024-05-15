

$(document).ready(function() {
    $('.tab-links a').on('click', function(e) {
        e.preventDefault();
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $(currentAttrValue).fadeIn(400).siblings('.tab').hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });

    // Show the first tab by default
    $('.tab-links li:first-child a').click();





    let currentIndex = 0;
    const slides = $('.carousel-slide .slide');
    const totalSlides = Math.ceil(slides.length / 3); // Calculate number of groups of 3 slides
    const dots = $('.dot');

    function showSlide(index) {
        if(index >= totalSlides) {
            index = 0;
        } else if(index < 0) {
            index = totalSlides - 1;
        }
        currentIndex = index;
        const offset = -index * 100;
        $('.carousel-slide').css('transform', 'translateX(' + offset + '%)');
        dots.removeClass('active');
        dots.eq(index).addClass('active');
    }

    dots.each(function(index) {
        $(this).on('click', function() {
            showSlide(index);
        });
    });

    // Initialize
    showSlide(currentIndex);


    $('.bar-toggle').click(function(){
        $('.navbar-list ul').toggleClass('show');
    });
});