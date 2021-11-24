import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})

export class ServiciosComponent implements OnInit {
 
  arrayMenus: { descripcion: string, precio: number, imagen: string} [];
  arrayEnsaladas: {descripcionE:string, imagenE: string}[];
  
  
  constructor() { 

     console.log("estoy en el constructor");
     this.getServicios();

     this.arrayMenus = [
        {
          descripcion:'Pastel de papas',
          precio: 3.80,
          imagen: 'http://www.recetariococina.net/fotos/pa-2.jpg '
        },
        {
          descripcion:'Pastel de pollo',
          precio: 3.20,
          imagen : 'https://i.pinimg.com/564x/e8/ca/7a/e8ca7aa367701d12afbdcef614fa5aa4.jpg '
        },
        {
          descripcion:'Pastel de calabaza',
          precio: 3.30,
          imagen: 'https://content-cocina.lecturas.com/medio/2018/07/19/paso-a-paso-para-realizar-tarta-de-calabaza-con-especias-resultado-final_1db938b7_800x800.jpg'
        }

        
        
      ]

      this.arrayEnsaladas = [
        {
          descripcionE:'Ensalada rusa chica',
          imagenE: 'https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/15272_1.jpg'
        
        },
        {
          descripcionE:'Ensalada de tomate con lechuga',
          imagenE: 'https://www.cocina-chilena.com/base/stock/Recipe/567-image/567-image_web.jpg'
        
        },
        {
          descripcionE:'Ensalada de atún y kale',
          imagenE: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/03/ensalada-de-pasta-con-atun-kale.jpg',
        }
      ]

      
    
  }

  ngOnInit() {
    console.log("se creo la vista");
    
  }

  getServicios(){
    console.log('estos son los menus ->', this.arrayMenus);
  
  }

}


