$(window).scroll(function(){
    
    if($("#menus").offset().top> 650){
        $("#menus").addClass("bg-primary");
        $("#cambio").addClass("btn-dark");
      
    }
    else
    {
       $("#menus").removeClass("bg-primary"); 
       $("#cambio").removeClass("btn-dark");
    }
 });