import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { left } from '@popperjs/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  constructor(private router: Router) {

    
    this.ChangeBackTransparentNav();
    /*this.ValidateResolution();*/
    this.CaptionMedia();
  }

  ngOnInit(): void {
    
  }



  navContacto() {
    
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/contacto'])
      this.ChangeBackTransparentNav();
    }else{
      $("nav ul").hide();
      this.router.navigate(['/contacto'])
    }
  }

  navHome() {
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/home'])
      this.ChangeBackTransparentNav();
    }else{
      $("nav ul").hide();
      this.router.navigate(['/home'])
    }
  }

  navHabilidades() {
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/habilidades'])
      this.ChangeBackTransparentNav();
    }else{
      $("nav ul").hide();
      this.router.navigate(['/habilidades'])
    }
  }


  navHobies() {
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/hobies'])
    this.ChangeBackTransparentNav();
    }else{
      $("nav ul").hide();
      this.router.navigate(['/hobies'])
    }

  }
  navExperiencia() {

    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/experiencia'])
      this.ChangeBackTransparentNav();
    }else{
      $("nav ul").hide();
      this.router.navigate(['/experiencia'])
    }
  }

  showMenu() {
    $("nav ul").toggle("slow");
    this.ChangeBackSolidNav();
    $("nav").css("background-color", "#0f2c5a");
  }
  
  HideMenu() {
    $("nav ul").hide();
  }

  ChangeBackTransparentNav() {
    $("nav").removeClass("changeBackSolidColor")
    $("nav").addClass("changeBackColor")
  }

  ChangeBackSolidNav() {
    $("nav").removeClass("changeBackColor")
    $("nav").addClass("changeBackSolidColor")

  }
/*
  ValidateResolution() {
    if (screen.width < 1024) {


      $("nav").prop("enabled");
      alert("Pequeña")
    } else if (screen.width < 1280) {
      $("nav").prop("enabled");
      alert("Mediana")
    } else {
      $("nav").prop("enabled");
      alert("Grande")
    }
  }*/

CaptionMedia(){

  $(window).resize(function(){
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
     // alert('La media query se cumple');
      $("nav ul").show();
    }else{
      $("nav ul").hide();
    }
    })



  
}
  
}
