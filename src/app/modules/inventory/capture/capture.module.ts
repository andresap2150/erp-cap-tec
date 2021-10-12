import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { CaptureComponent } from './capture.component';

@NgModule({
	declarations: [CaptureComponent],
	imports : [
	  CommonModule,
	  SharedModule
	],
	exports: [
      CaptureComponent
	]
})

export class CaptureModule { }