import { InteractionService } from 'src/app/services/interaction.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserI } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  datos: UserI = {
    nombre: null,
    direccion: null,
    celular: null,
    correo: null,
    uid: null,
    password: null,
    perfil: 'cliente',

  }

  constructor(private auth :  AuthService,
    private firestore: FirestoreService,
    private  interaction : InteractionService,
    private router: Router ) { }

  ngOnInit() {}

  async registrar(){

    this.interaction.presentLoading('registrando...')


    console.log('datos',this.datos);
     const res = await this.auth.registrarUser(this.datos).catch(error =>{
      this.interaction.closeLoading();
      this.interaction.presentLoading('error')
      console.log('eror');
      
    })

    if (res){
      console.log('usuario creado con exito');
      const path = 'Usuarios';
      const id =  res.user.uid;
      this.datos.uid = id;
      this.datos.password = null
      await this.firestore.creatDoc(this.datos, path, id)
      this.interaction.closeLoading();
      this.interaction.presentToast('Registro exitoso')
      this.router.navigate(['/inicio'])
    }




  }

}
