import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { CargarFormatosComponent } from './cargar-formatos.component';

@NgModule({
  declarations: [
    CargarFormatosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CargarFormatosComponent
  ]
})
export class CargarFormatosModule { }