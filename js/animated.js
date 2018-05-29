$(document).ready(function () {
    $('img.animated').hover(
        function () {
            $(this).addClass('flash'); // Add class
        },
        function () {
            $(this).removeClass('flash'); // Remove class
        }
    )
    
    
})