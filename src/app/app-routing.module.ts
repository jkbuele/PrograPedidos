import { MenuComponent } from './pages/menu/menu.component';
import { ValoracionComponent } from './pages/valoracion/valoracion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


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
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
