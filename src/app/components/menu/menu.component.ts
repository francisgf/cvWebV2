import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { left } from '@popperjs/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private router:Router) { 
   this.ChangeBackTransparentNav();
  }

  ngOnInit(): void {
  }
  navContacto(){
    this.router.navigate(['/contacto'])  
    this.HideMenu();   
    this.ChangeBackTransparentNav();  
  }
  navHome(){
    this.router.navigate(['/home'])
    this.HideMenu();
    this.ChangeBackTransparentNav(); 
  }
  navHabilidades(){
    this.router.navigate(['/habilidades'])
    this.HideMenu();
    this.ChangeBackTransparentNav(); 
  }
  navHobies(){
    this.router.navigate(['/hobies'])
    this.HideMenu();
    this.ChangeBackTransparentNav(); 
  }
  navExperiencia(){
    this.router.navigate(['/experiencia'])
    this.HideMenu();
    this.ChangeBackTransparentNav(); 
  }

  showMenu(){

   // if(window.innerWidth > 800){
   //$("nav ul").fadeIn(500);
   $("nav ul").toggle("slow");
   this.ChangeBackSolidNav();
   $("nav").css("background-color", "#0f2c5a");
   /*$(".menu i").replaceWith("<i class=></i>");
   $(".menu i").attr('_ngcontent-xrx-c53');
   $(".menu i").attr('class','bi bi-arrow-bar-up').before;*/

   // }
  }
  HideMenu(){
    $("nav ul").hide();
  }

  ChangeBackTransparentNav(){
    $("nav").removeClass("changeBackSolidColor")
    $("nav").addClass("changeBackColor")
  }

  ChangeBackSolidNav(){
    $("nav").removeClass("changeBackColor")
    $("nav").addClass("changeBackSolidColor")
   
  }
}
