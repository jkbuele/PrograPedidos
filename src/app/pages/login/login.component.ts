import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
credenciales= {
  correo: null,
  password: null,
}
  

  constructor(private auth: AuthService,
    private interaction: InteractionService,
    private router: Router) {}

  ngOnInit() {}

  async login(){
     await this.interaction.presentLoading('ingresando.....')
    console.log('credenciales ->',this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch( error =>{
      console.log('error');
      this.interaction.closeLoading();
      this.interaction.presentToast('usuario o contraseña invalido')

    } )
    if (res){
      console.log('res ->',res);
      this.interaction.closeLoading();
      this.interaction.presentToast('ingresado con exito');
      this.router.navigate(['/inicio'])
      
    }
  }

  


}

