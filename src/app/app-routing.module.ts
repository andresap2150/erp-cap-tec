import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPatenteComponent } from './modules/patentes/crear-patente/crear-patente.component';
import { ListarPatentesComponent } from './modules/patentes/listar-patentes/listar-patentes.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', loadChildren: ()=>import('./modules/user/login/login.module').then(m => m.LoginModule)},
  {path:'home', loadChildren: ()=>import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'crear-patente/:id', loadChildren: ()=>import('./modules/patentes/crear-patente/crear-patente.module').then(m => m.CrearPatenteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
