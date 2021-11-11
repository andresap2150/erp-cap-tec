import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { CrearPatenteComponent } from './crear-patente.component';
import { CrearPatenteRoutingModule } from './crear-patentes-routing.module';

@NgModule({
	declarations: [CrearPatenteComponent],
	imports : [
	  CommonModule,
	  CrearPatenteRoutingModule,
	  SharedModule
	],
	exports: [
      CrearPatenteComponent
	]
})

export class CrearPatenteModule { }