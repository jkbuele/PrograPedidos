import { environment } from './../environments/environment';
import { MenuComponent } from './pages/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ValoracionComponent } from './pages/valoracion/valoracion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { LoginComponent } from './pages/login/login.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
     InicioComponent, 
     LoginComponent,
     ServiciosComponent, 
     ValoracionComponent,
      MenuComponent,
      RegistroComponent
    ],

    entryComponents: [],

    imports: [
      BrowserModule,
       IonicModule.forRoot(),
        AppRoutingModule, 
        RouterModule, 
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule
      ],
        
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
   bootstrap: [AppComponent],
})
export class AppModule {}
