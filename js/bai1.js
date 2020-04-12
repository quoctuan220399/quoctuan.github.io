$(document).ready(function () {


    var vt1 = $('.bodyimg').offset().top;
    var vt2 = $('.anhbd2').offset().top;
    var vt3 = $('.footer').offset().top;

    $(window).scroll(function () { 
        
        var cuon = $('html').scrollTop();
        console.log(vt1);
        if(cuon >= vt1){

            $('.bodyimg').css({
                'position':'fixed',
                'top':'0px'
            });
        }
        else{
            $('.bodyimg').css({
                'position':'sticky',
                'top':'0px'
            });     
        }

        if(cuon >= vt1+200){
            $('.ten-len').css({
                'opacity':'1',
                'visibility':'visible',
                'transition':'0.5s'
            });   
        }
        else{
            $('.ten-len').css({
                'opacity':'0',
                'visibility':'hidden',
                'transition':'0.5s'
            });   
      }

      if(cuon >= vt2){

        $('.anhbd2').css({
            'position':'fixed',
            'top':'0px'
        });
        $('.bodyimg').css({
            'position':'sticky',
            'top':'0px'
        });  
    }
    else{
        $('.anhbd2').css({
            'position':'sticky',
            'top':'0px'
        });     
    }
    if(cuon >= vt3){
        $('.anhbd2').css({
            'position':'sticky',
            'top':'0px'
        });    
    }
    });

    $('.ten-len').click(function (e) { 
        
        $('html').animate({scrollTop:0},600);
    });

    $('input[type="text"]').click(function(){

        $('.p').css({
            'position':'relative',
            'top':'0px',
            'left':'0px',
            'font-size':'15px',
            'transition':'0.5s'
        });
    });

    $('.p').click(function(){

        $('.p').css({
            'position':'relative',
            'top':'0px',
            'left':'0px',
            'font-size':'15px',
            'transition':'0.5s'
        });
    });

    $('.footer img').click(function(){

        $('.p').css({
            'position':'relative',
            'top':'35px',
            'left':'15px',
            'font-size':'20px',
            'transition':'0.5s'
        });
    });
});