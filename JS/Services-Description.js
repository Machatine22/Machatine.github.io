/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


/* POP up services descrption*/
$(document).ready(function(){
    
    /*After clicking the Web design read more button*/
    $("#btn-web-design").click(function(){
      
    /*  $(".Service-Description").css("visibility", "show");*/
    $("#Web-Design-Service-Description").slideDown(600);
     /* $("#Web-Design-Service-Description").css("display", "block");*/
        
    });
    
      /*Web development button*/
     $("#btn-web-development").click(function(){
      
    /*  $(".Service-Description").css("visibility", "show");*/
    /* $("#Web-Development-Service-Description").css("display", "block");*/
    $("#Web-Development-Service-Description").slideDown(600);
       /* $("#Web-Development-Service-Description").delay(10000);*/
        
    });
        
    
    /* Android and IOS button*/
     $("#android-IOS").click(function(){
      
    /*  $(".Service-Description").css("visibility", "show");*/
      $("#Android-IOS-Service-Description").slideDown(600);
        
    });
    
     /* Web support button*/
     $("#Web-Support").click(function(){
      
    /*  $(".Service-Description").css("visibility", "show");*/
      $("#Web-Support-Service-Description").slideDown(600);
        
    });
    
     /* Web migration button*/
     $("#web-migration").click(function(){
      
    /*  $(".Service-Description").css("visibility", "show");*/
      $("#Web-Migration-Service-Description").slideDown(600);
        
    });
    
     /* Windows desktop applications button*/
     $("#windows-Desktop-Apps").click(function(){
      
    /*  $(".Service-Description").css("visibility", "show");*/
      $("#Windows-Desktop-Apps-Service-Description").slideDown(600);
        
    });
    
    /*The closing icon*/
      $(".close-corner-icon").click(function(){
      
    /*  $(".Service-Description").css("visibility", "show");*/
    $(".Service-Description").slideUp(600);
      /*$(".Service-Description").css("display", "none");*/
        
    });
    
    /*the past work pop up images*/
    
     $("#ima").click(function(){
    /*  $(".Service-Description").css("visibility", "show");*/
    /*  $("#teste").css("display", "flex");*/
      $("#teste").fadeIn(750).css("display","flex");
      //$("body").css("opacity","0.1");
      //  $(".past-work-images-container").css("opacity","1");
        
    });
    
    
    /*the closing iconn for the past work image*/
    
      /*The closing icon*/
      $(".close-corner-icon").click(function(){
      
    /*  $(".Service-Description").css("visibility", "show");*/
      /*$(".past-work-images-container").css("display", "none");*/
       $(".past-work-images-container").fadeOut(750);
     // $("body").css("opacity","1");
        
    });
    
    /*After clicking the for more information button*/
    
    $(".more-info-button").click(function(){
       
      $(".Service-Description").css("display", "none");
        
    });
});