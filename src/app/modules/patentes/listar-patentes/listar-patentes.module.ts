import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ListarPatentesComponent } from './listar-patentes.component';

@NgModule({
	declarations: [ListarPatentesComponent],
	imports : [
	  CommonModule,
	  SharedModule
	],
	exports: [
      ListarPatentesComponent
	]
})

export class ListarPatentesModule { }