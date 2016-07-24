/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Home */
    
    
        /* button  Home */
    
    
        /* button  Home */
    
    
        /* button  Home */
    
    
        /* button  Home */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  about */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#about_us_page"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
