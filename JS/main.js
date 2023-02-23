/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



/* the content slider JS*/
$(function(){
  
    var inWrap = $('.inner-wraper');
    $('.prev').on('click',
    function(){
       
        inWrap.animate({left: '0%'},
        500, function(){
           
            inWrap.css('left','-100%');
            
            $('.slide').first().before($('.slide').last());
        });
        
    });
    
    
       $('.next').on('click',
    function(){
       
        inWrap.animate({left: '-200%'},
        500, function(){
           
            inWrap.css('left','-100%');
            
            $('.slide').last().after($('.slide').first());
        });
        
    });
    /*End of content slider*/
    $(".dropbtn").vclick(function (){
$(".dropdown-content").fadeToggle(525);

}
);
    
    /*Android and Tablet menu buttom activation*/
   $(".dropbtn").click(function(){
      
      
      /* $(".dropbtn").on("touch ", function(){*/
       $(".dropdown-content").fadeToggle(525);
      
      /*
      $(".dropbtn").click(function(){
      
       $(".dropdown-content").css("display","none");
      
   });*/
   });
    
});
