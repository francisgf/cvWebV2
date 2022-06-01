import { Component, OnInit } from '@angular/core';
import { hide } from '@popperjs/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 


    
    

    setTimeout(function() {
     $(".div-carga").fadeIn(1000);
     $(".div-carga").hide();
     
  }, 2000);

  

$("#img").on({
  mouseenter: function () {
    $("#div-saludo").fadeIn(1000);
    $("#div-saludo").removeAttr("hidden");
    alert("edntro");
    
  },
  mouseleave: function () {
    $("#div-saludo").fadeIn(1000);
    $("#div-saludo").attr("hidden");
    alert("fuera");
    
  }
});


  }

ocultarModal():void{
  $("#sobremi-content").hide();
}

mostrarModal():void{
  $("#sobremi-content").show();
}


  ngOnInit(): void {
   //this.GetData();
   this.ocultarModal();
  }

/*
 ver() {
  $("#div-saludo").fadeIn(1000);
    $("#div-saludo").removeAttr("hidden");
}*/

/*
mouseInImg(){
  $("#img").mouseover(function (){
    $("#div-saludo").fadeIn(1000);
    $("#div-saludo").removeAttr("hidden");
    
  });
  
  $("#img").mouseout(function (){
    $("#div-saludo").fadeIn(1000);
    $("#div-saludo").attr("hidden");
    
  });
}*/

GetData(): void {
  fetch('http://localhost:8080/base/byid/0', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      $(".nombre").text(data.name +" "+ data.firtsName);
      console.log('Success:', data);
    })
    .catch((error) => {
      console.log("Error al enviar");
      alert("NO se pudo obtener los datos ");
    });


 }

 showSaludo(){
  $("#div-saludo").fadeIn(1000);
  $("#div-saludo").removeAttr("hidden");
 }

 hidenSaludo(){
  $("#div-saludo").fadeOut(1000);
  $("#div-saludo").attr("hidden","hidden");
 }
 
 


}
