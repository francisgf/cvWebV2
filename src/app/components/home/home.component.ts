import { Component, OnInit } from '@angular/core';
import { hide } from '@popperjs/core';
import { Postulant } from 'src/app/model/postulant';
import {PostulantService} from 'src/app/services/postulantServices';
import { Observable } from "rxjs";
import * as $ from 'jquery';
//import { stringify } from 'querystring';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 postulantObj = new Observable<Postulant[]>();
 // postulantt: Observable<Postulant[]>;
 postulantRersponse = new Postulant();
 

  constructor(private postulantServices: PostulantService) { 
    //this.reloadData();
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

reloadData(){
 /*this.postulantObj=  this.postulantServices.getpostulantsList();*/
 this.getList();
}

ocultarModal():void{
  $("#sobremi-content").hide();
}

mostrarModal():void{
  $("#sobremi-content").show();
}


  ngOnInit():void{
   //this.GetData();
   this.ocultarModal();
   this.reloadData();
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


getList():void{
  fetch('http://localhost:9090/postulant/byId/62ad748e0deff61ee03391e8', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {

      this.postulantRersponse= data;
          $(".nombre").text("Mi nombres es"+" "+this.postulantRersponse.name);
          $(".profesion").text("Soy"+" "+this.postulantRersponse.profession);    
          $("#phone").text(this.postulantRersponse.phone);
          $("#email").text(this.postulantRersponse.email);
          $("#location").text(""+this.postulantRersponse.location);
        

    //  $(".nombre").text(data.name +" "+ data.firtsName);
     // console.table('Success:', data);
      console.log('aqui la data:', this.postulantRersponse.name);  
    })
    .catch((error) => {
     // $("#error-server").text("Error al cargar los datos");
    $("#error-server").append(`<span class="sad-icon"><i  class="bi bi-emoji-frown-fill"></i></span>
                            <span class="msn-error-server">Error al cargar los datos</span>`);
        
    $(".nombre").text("No se pudo cargar");
      $(".profesion").text("No se pudo cargar");    
      $("#phone").text("No se pudo cargar");
      $("#email").text("No se pudo cargar");
      $("#location").text("No se pudo cargar");
      $("#btn-sobre-mi").hide()
       console.error("SERVER RESPONSE ERROR ");
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
