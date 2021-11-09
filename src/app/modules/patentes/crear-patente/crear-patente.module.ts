import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { CrearPatenteComponent } from './crear-patente.component';

@NgModule({
	declarations: [CrearPatenteComponent],
	imports : [
	  CommonModule,
	  SharedModule
	],
	exports: [
      CrearPatenteComponent
	]
})

export class CrearPatenteModule { }