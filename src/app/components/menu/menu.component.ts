import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { left } from '@popperjs/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 controlNav:number=0
 
  constructor(private router: Router) {
    this.ChangeBackTransparentNav();
    this.captureMedia();
    
  }

  ngOnInit(): void {
    this.controlNave()
  }

  navHome() {
    this.controlNav=1
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/home'])
    }else{
      $("nav ul").hide();
      this.router.navigate(['/home'])
      this.ChangeBackTransparentNav();
    }
    this.controlNave()
  }

  navHabilidades() {
    this.controlNav=2
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/habilidades'])
    }else{
      $("nav ul").hide();
      this.router.navigate(['/habilidades'])
      this.ChangeBackTransparentNav();
    }
    this.controlNave()
  }

navExperiencia() {
  this.controlNav=3
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/experiencia'])
    }else{
      $("nav ul").hide();
      this.router.navigate(['/experiencia'])
      this.ChangeBackTransparentNav();
    }
    this.controlNave()
  }
  navHobies() {
    this.controlNav=4
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/hobies'])
    }else{
      $("nav ul").hide();
      this.router.navigate(['/hobies'])
      this.ChangeBackTransparentNav();
    }
    this.controlNave()
  }
  
  navContacto() {
    
    this.controlNav=5
    var mediaqueryList = window.matchMedia("(min-width: 1280px) and (max-width: 1920px)");
    if(mediaqueryList.matches) {
      this.router.navigate(['/contacto'])
    }else{
      $("nav ul").hide();
      this.router.navigate(['/contacto'])
      this.ChangeBackTransparentNav();
    }
    this.controlNave()
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
controlNave(){
  this.resetNav()

if(this.controlNav==0 || this.controlNav==1){
    $("#li-home").css("background-color", "#2297ec"); 
}else if(this.controlNav==2){
  $("#li-habilidades").css("background-color", "#2297ec"); 
}else if(this.controlNav==3){
$("#li-experiencia").css("background-color", "#2297ec");
}else if(this.controlNav==4){
  $("#li-hobies").css("background-color", "#2297ec");
} 
else if(this.controlNav==5){
  $("#li-contacto").css("background-color", "#2297ec");
}
}
resetNav(){
  $("#li-home").css("background-color", "initial"); 
  $("#li-habilidades").css("background-color", "initial"); 
  $("#li-experiencia").css("background-color", "initial");
  $("#li-hobies").css("background-color", "initial");
  $("#li-contacto").css("background-color", "initial");
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

  captureMedia(){

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
