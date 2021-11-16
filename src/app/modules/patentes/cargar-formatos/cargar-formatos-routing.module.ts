import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarFormatosComponent } from './cargar-formatos.component';


const routes: Routes = [{path: '', component: CargarFormatosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargarFormatosRoutingModule{}