import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ListaPatentesComponent } from './lista-patentes.component';

@NgModule({
	declarations: [ListaPatentesComponent],
	imports : [
	  CommonModule,
	  SharedModule
	],
	exports: [
      ListaPatentesComponent
	]
})

export class ListaPatentesModule { }