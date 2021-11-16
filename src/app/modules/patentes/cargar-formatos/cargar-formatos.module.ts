import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { CargarFormatosComponent } from './cargar-formatos.component';
import { CargarFormatosRoutingModule } from './cargar-formatos-routing.module';

@NgModule({
  declarations: [
    CargarFormatosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CargarFormatosRoutingModule,
  ],
  exports:[
    CargarFormatosComponent
  ]
})
export class CargarFormatosModule { }