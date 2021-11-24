import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  async openMenu(ev: any){
    console.log('abrir menu lateral');

    const menu = await this.popoverController.create({
      component: MenuComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      event: ev
    });
    await menu.present();
   const { role } = await menu.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
   
  }
  interface Inicio{
    imagen: string
    }

  


