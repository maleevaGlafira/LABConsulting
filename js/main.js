
        
$(function(){
    var yams;            
    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.cssload-tetrominos');
        $spinner.fadeOut();         
        $preloader.delay(350).fadeOut('slow');  

    // Menu opener gamburger     
    $("#header__burger").click(function(event) {
       
        if ($(".menu-collapse").is(":hidden")) {
            $(".menu-collapse").css({order: '2'});
            $(".menu-collapse").css({  display: 'none'}).removeClass('d-none');
            $(".menu-collapse").find('ul').addClass('menu_open');
            $("#header__burger").find('.btn__burger').removeClass('fa-bars fas').addClass('fa-times far');
            $(".menu-collapse").slideDown(400);
        }
        else{
            $("#header__burger").find('.btn__burger').removeClass(' far fa-times').addClass('fas fa-bars');
            $(".menu-collapse").slideUp(400);        
            setTimeout(function(){
                         $(".menu-collapse").css({order: '0'}).find('ul').removeClass('menu_open')
                       },
                       400);            
        }
    });

    // Modal window  
    $(".btn_call-form").click(function(event) {
        /* Act on the event */
        event.preventDefault();

        $('#callModal').arcticmodal();
    });
    // Slider   
    $('.slider').slick({
      // setting-name: setting-value
      dots: true,
      prevArrow:'<button type="button" class="slick-prev slider-arrow"><i class="far  fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next slider-arrow"><i class="far  fa-angle-right"></i></button>'   
    }); 

   // Map 
   // Init Map
  function init(){ 
        var myMap = new ymaps.Map("map", {
            center: [46.473901, 30.747089],
            zoom: 17
        }); 
        
        var myPlacemark = new ymaps.Placemark([46.474120, 30.745993], {
            hintContent: 'LAB Consalting',
            iconCaption: 'Ул Базарная, 36'
        });
        myMap.events.add('tilesLoaded', function (e) {
             var $preloader = $('#page-preloader'),
             $spinner   = $preloader.find('.spinner');        
             $preloader.delay(350).fadeOut('slow');  
             alert("ready");
        });
        
        myMap.geoObjects.add(myPlacemark);
    }
    // Load Map
    if  ($("div").is("#map") ) {
           ymaps.ready(init); 
       }

})