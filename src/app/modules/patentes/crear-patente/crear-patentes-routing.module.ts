import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPatenteComponent } from './crear-patente.component';


const routes: Routes = [{path: '', component: CrearPatenteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearPatenteRoutingModule{}