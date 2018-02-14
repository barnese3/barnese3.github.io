//image slideshow
var main = function() {

  var paused = false

  $('.arrowR').click(function() {
    paused = true;
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
  });
    
  $('.arrowL').click(function() {
    paused = true;
    $('#slideshow > div:last')
    .fadeIn(1000)
    .prependTo('#slideshow')
    .next()
    .fadeOut(1000)
    .end();
  });

  setInterval(function() {
    if (paused === false) { 
      $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
    };
  },  5000);

};

$(document).ready(main);




// Responsive mobile navigation menu
$('#menu-button').on('click', function() {
  $(document.body).toggleClass('menu-open');
  if ($(".mobile-nav").height() == 0) {
           $(".mobile-nav").animate(
               {height: "100vh"});
           }
        else if ($(".mobile-nav").height() === "100vh") {
           $(".mobile-nav").animate({height: "0%"});
           }
});




// Changes the background color of the nav after you scroll past the header photo
$(window).on("scroll", function() {
  if ($(document).scrollTop() >= 690) {
    $(".nav").addClass("scroll");
  }
});

$(window).on("scroll", function() {
  if ($(document).scrollTop() < 690) {
    $(".nav").removeClass("scroll");
  }
});




// Showing the image from the slideshow on fullscreen
var modal = document.getElementById('modal');

// Get the image and insert it inside the modal
var img = document.getElementsByClassName('fullscreen-img');
var modalImg = document.getElementById("fullscreen-modal");

$(".fullscreen-img").click(function(){
  modal.style.display = "block";
  modalImg.src = this.src;
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}




// customer reviews
$(document).ready(function(){
  $(".reviews").each(function(){
    var This = $(this) ;
    var Nums = This.find(".panel").length ;
    This.find(".panel:first").addClass("PanelAct");
    This.append("<div class='control'></div>") ;
    This.find(".panel").not(".PanelAct")
      .css("left","100%")
    for ( i=0 ; i<Nums ; i++) {
      This.find(".control").append("<span></span>") ;
    }
    This.find(".control span:eq(0)").addClass("ContActive");
    
    This.find(".control span").click(Reviews);
    
    function Reviews(){
      var loc = $(this).index();
      var ActivLoc = This.find(".ContActive").index();

      $(this).addClass("ContActive")
        .siblings().removeAttr("class");
      
      if ( loc > ActivLoc ) {
        var Dire = '100%'
        var IDire = '-100%'
      }
      if ( loc < ActivLoc ) {
        var Dire = '-100%'
        var IDire = '100%'
      }

      This.find(".panel").not(".PanelAct")
      .css("left",Dire) ;
      This.find(".panel:eq("+loc+")")
      .animate({'left':'0'},speed)
      .addClass("PanelAct")
      .siblings(".PanelAct")
      .removeClass("PanelAct")
      .animate({'left':IDire},speed);
    }
  });
});

$(document).ready(function() {
    $(function(){
        $.fn.scrollToTop=function(){
            $(this).hide().removeAttr("href");
            if($(window).scrollTop()!="0"){
                $(this).fadeIn("slow")
            }
            var scrollDiv=$(this);
            $(window).scroll(function(){
                if($(window).scrollTop()=="0"){
                    $(scrollDiv).fadeOut("slow")
                }else{
                    $(scrollDiv).fadeIn("slow")
                }
            });
            $(this).click(function(){
                $("html, body").animate({scrollTop:0},"slow")
            }
            )}
        });
            
    $(function(){
        $(".top").scrollToTop();
    });
});