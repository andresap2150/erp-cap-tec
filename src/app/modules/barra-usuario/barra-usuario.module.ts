import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { BarraUsuarioComponent } from './barra-usuario.component';

@NgModule({
  declarations: [BarraUsuarioComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BarraUsuarioComponent]
})
export class BarraUsuarioModule {}