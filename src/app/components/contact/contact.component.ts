import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from '../model/emailModel';
//import { EmailService } from '../service/email.Service';
import { Inject, Injectable } from '@angular/core';
import { state } from '@angular/animations';
import { HttpStatusCode } from '@angular/common/http';
//declare var $: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ContactComponent implements OnInit {

  // START - declarationsfields form
  emailCustomer = ''
  subject = '';
  contentMessage = '';
  phonenumber = '';
  name = '';

  isShown:boolean=false;
 
  constructor( private router: Router) { }

  ngOnInit(): void {
    
  
  }

  navEmailConfirm(){
    this.router.navigate(['/sendemail'])
   }
  sendEmail(): void {

    $("button").attr("hidden","hide");
    $("#charge").removeAttr("hidden");

    const emailDestinate = "francismendozach@hotmail.com";
    const emailData = new Email(this.emailCustomer, emailDestinate, this.subject, this.contentMessage, this.phonenumber, this.name);
    console.log("salida" + JSON.stringify(emailData));

    fetch('https://sendmailapiv1.herokuapp.com/sendemail/api/v2/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
    .then(response => {
        console.log("response status:"+response.status) //<-- Tiene status
        console.log("response status:"+response.ok)
        response.ok && console.log("Su mensje fue enviado")// <-- status entre 200-299  

       if(response.status==406){
        alert("El formato del correo es incorrecto")
       }else if(response.status==500){
        alert("Ocurrió un error de servidor")
        $("#charge").attr("hidden","hide");
        $("button").removeAttr("hidden");
        
       }else if(response.ok==true && response.status==200){
        this.cleanFields();
        //this.showModalSend();
        this.navEmailConfirm();
       }
      
      }
  
    )
    //.then(data => console.log("aqui los datos")) // <-- Aqui si esta data
    .catch(error => console.log("Hay un error que no está entre 200 y 50x"));
    console.log("Ocurrio un error")
  }


cleanFields(): void{
  this.emailCustomer = '';
  this.subject = '';
  this.contentMessage = '';
  this.phonenumber = '';
  this.name = '';
  
}


showModalSend(){
  $(".modal-mesaje").fadeIn(800);
  $(".modal-mesaje").removeAttr("hidden");

}

hiddenModalSend(){

  $(".modal-mesaje").attr("hidden","hidden");
}

}

$("#btn-enviar").on("click", function () {
  // $('#target').show(); //muestro mediante id
  //$('.target').show(); //muestro mediante clase
  alert("hola");
});




/*
  enviarEmail(): void {
     this.email= new Email(this.emailData, this.contentMessage, this.subject);
    this.emailService.sendEmail(this.email).subscribe(
      data => {
        alert("El mensaje fue enviado"+data);

      },
      err => {
        alert(err.console.error());
      }
    );


  }*/

 