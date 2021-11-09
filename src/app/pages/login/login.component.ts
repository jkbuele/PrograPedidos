import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  usuarios: string= "admin";
  password: number= 12345;

  //usuario1: string= 'admin';
  //contraseña1: number= 12345;

  constructor() {
    console.log("hola");
    
   }

  ngOnInit() {}

  login(){
    if (this.usuarios == "admin" && this.password == 12345)
    console.log("LOGIN EXITOSO");
    //console.log(this.usuario1);
    else{
      console.log("INCORRECTO");
      
    }
  }

  


}

