import { PerfilComponent } from './pages/perfil/perfil.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';

import { MenuComponent } from './pages/menu/menu.component';
import { ValoracionComponent } from './pages/valoracion/valoracion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [
  {
    path: 'inicio', component:  InicioComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'servicios', component: ServiciosComponent
    },
    {
      path: 'valoracion', component: ValoracionComponent
    },
    {
      path: 'menu', component: MenuComponent
    },
    {
      path: 'registro', component: RegistroComponent
    },
    {
      path: 'perfil', component: PerfilComponent
    },
    {
      path: '', component: InicioComponent
      
    },
    {
      path: '**', redirectTo:'inicio', pathMatch:'full' 
      
    },
    
    {
      path: '', component: CalculadoraComponent
      
    },
    
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
