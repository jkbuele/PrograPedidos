import { FirestoreService } from './../../services/firestore.service';
import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  constructor(
                public popoverController: PopoverController,
                private firestore: FirestoreService
             ) { }

  ngOnInit() {}

  async openMenu(ev: any){
    console.log("abrir menu");

    const menu = await this.popoverController.create({
      component: MenuComponent,
      translucent: false,
      event: ev
    });
    await menu.present();
    
  }

  getMenus(){
    this.firestore.getCollection()
  }

}
