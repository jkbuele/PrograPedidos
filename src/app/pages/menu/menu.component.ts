import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

 login: boolean = false;
 rol: 'cliente'| 'empresa'= 'empresa'

  constructor(public popoverController: PopoverController,
    private router: Router,
    private auth: AuthService,
    private interaction: InteractionService,
    private firestore: FirestoreService,
    private popoover: PopoverController) {


      this.auth.stateUser().subscribe(res =>{
        if(res){
          console.log('permanece logueado');
          this.login = true;
        }else{
          console.log('no esta logueado');
          this.login= false;
        }

      })
     }

  ngOnInit() {}

  irLogin(){
    console.log('di click en login');
    this.router.navigate(['/login'])
    this.popoover.dismiss();
    
  }
  irServicios(){
    console.log('di click en servicios');
    this.router.navigate(['/servicios'])
    this.popoover.dismiss();
    
  }

  irValoracion(){
    console.log('di click en valoracion');
    this.router.navigate(['/valoracion'])
    this.popoover.dismiss();
    
  }
  logout(){
    this.auth.logut()
    this.interaction.presentToast('sesion finalizada');
    this.router.navigate(['/login'])
  }

  loginApp(){

  }

  

}
