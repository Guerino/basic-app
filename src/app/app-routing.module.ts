import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './components/hello/hello.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

//Rutas de nuestra aplicacion
const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full'}, //Ruta por defecto
  { path: 'hello', component: HelloComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id/:nombre/:edad', component: UserComponent },
  //Componente para las rutas no encontradas - Error 404
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
