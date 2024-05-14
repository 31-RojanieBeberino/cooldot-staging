// $(document).ready(function() {
//     $('.tab-links a').on('click', function(e) {
//         e.preventDefault();
//         var currentAttrValue = $(this).attr('href');

//         // Show/Hide Tabs
//         $('.tab' + currentAttrValue).fadeIn(400).siblings().hide();

//         // Change/remove current tab to active
//         $(this).parent('li').addClass('active').siblings().removeClass('active');
//     });

//     // Show the first tab by default
//     $('.tab-links li:first-child a').click();
// });


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
});