import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { left } from '@popperjs/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  navContacto(){
    this.router.navigate(['/contacto'])       
  }
  navHome(){
    this.router.navigate(['/home'])
  }
  navHabilidades(){
    this.router.navigate(['/habilidades'])
  }
  navHobies(){
    this.router.navigate(['/hobies'])
  }
  navExperiencia(){
    this.router.navigate(['/experiencia'])
  }

  showMenu(){

   // if(window.innerWidth > 800){
   //$("nav ul").fadeIn(500);
   $("nav ul").toggle("slow");
   $("nav").css("background-color", "#0f2c5a");
   /*$(".menu i").replaceWith("<i class=></i>");
   $(".menu i").attr('_ngcontent-xrx-c53');
   $(".menu i").attr('class','bi bi-arrow-bar-up').before;*/

   // }
  }

}
