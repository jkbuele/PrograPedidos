import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/models';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {

  menu5: number = 3 ;
  almuerzos: string= "ALMUERZOS";
  enable: boolean = false;

  menus1: number[]= [0, 4, 9, 9];

  sopa: Menu = {
    sopa: 'Andina',
    platoFuerte: 'Burritos al pastor, arroz mexicano',
    jugo: 'piña',
    cubiertos: 3,
    mesa: 'C'

  }

  menus: Menu[]=[
    {
      sopa: 'Andina',
      platoFuerte: 'Burritos al pastor, arroz mexicano',
      jugo: 'piña',
      cubiertos: 3,
      mesa: 'C'
    },
    {
      sopa: 'Arveja con verde',
      platoFuerte: 'Bistec de carne con papas fritas y arroz',
      jugo: 'limonada',
      cubiertos: 4,
      mesa: 'C'
    },
    {
      sopa: 'Locro de zapallo',
      platoFuerte: 'Sudado de corvina, chifles, arroz',
      jugo: 'papaya',
      cubiertos: 1,
      mesa: 'P'
    },
  ]

  constructor() { 
    console.log("estoy en el constructor");
    this.getServicios();

    this.menus.forEach( menus => {
      console.log('la sopa es ->', menus.sopa);
      
    })
    
    

    
  }

  ngOnInit() {
    console.log("se creo la vista");
    
  }

  getServicios(){
    console.log('estos son los menus ->', this.menus);
  
  }

}


