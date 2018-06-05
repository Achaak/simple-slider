$(window).on('load', function() {
    var idImgShow = 1;

    init_slider();        
    showImage();
    
    $(".slider-prev").click(function(e){
        idImgShow--;

        if(idImgShow == 0)
            idImgShow = $('.slider-ctn img').length;

        showImage();
    });
    $(".slider-next").click(function(e){
        idImgShow++;

        if(idImgShow > $('.slider-ctn img').length)
            idImgShow = 1;

        showImage();
    });
    $(".slider-dot").click(function(e){
        idImgShow = $(this).index() + 1;

        showImage();
    });

    function showImage() {
        $('.slider-ctn img').hide();
        $('.slider-ctn img:nth-child(' + idImgShow + ')').fadeIn(500);
        
        $('.dot-ctn .slider-dot').removeClass('selected');
        $('.dot-ctn .slider-dot:nth-child(' + idImgShow + ')').addClass('selected');

    }
    
    function init_slider() {    
        $('.slider-ctn').append(
            '<a class="slider-prev">&#10094;</a>' +
            '<a class="slider-next">&#10095;</a>'
        );
        $('.slider').append(
            '<div class="dot-ctn"></div>'
        );
    
        var nbDotCtn = ''
        for (var i = 0; i < $('.slider-ctn img').length; i++) {
            nbDotCtn += '<span class="slider-dot"></span>';
            
        }
        $('.dot-ctn').append(nbDotCtn);
    }
});