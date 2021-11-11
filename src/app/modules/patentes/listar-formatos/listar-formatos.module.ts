import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ListarFormatosComponent } from './listar-formatos.component';

@NgModule({
	declarations: [ListarFormatosComponent],
	imports : [
	  CommonModule,
	  SharedModule
	],
	exports: [
      ListarFormatosComponent
	]
})

export class ListarFormatosModule { }