import { Component } from '@angular/core';
declare var $:any;
@Component({
    selector:"header-container",
  templateUrl:'./app/templates/header.html'
})
export class HeaderComponent  {
    constructor(){
        
    }
    ngOnInit(){
       
        $(window).scroll(function(){
            var offset = $(".header-container").offset();
             console.log(offset.top-$(window).scrollTop()+"top")
             if(offset.top-$(window).scrollTop()<0){
                 $("#header-nav").addClass("fixed");
                 console.log(offset.top-$(window).scrollTop()+"great")
             }
             if(offset.top-$(window).scrollTop()>0)
                 {
                     console.log(offset.top-$(window).scrollTop()+"less")
                 $("#header-nav").removeClass("fixed");
             }
        })
    }
}
