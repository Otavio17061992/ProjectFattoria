$(document).ready(function(){

    $('.owl-carousel').owlCarousel(
        {
            items: 3,
            loop:true,
            margin:15,
            responsive: {
                0: {
                    items: 1
                },
                720: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        }
    );


})