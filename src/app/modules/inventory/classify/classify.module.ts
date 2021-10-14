import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ClassifyComponent } from './classify.component'

@NgModule({
  declarations: [ClassifyComponent],
  imports : [
    CommonModule,
    SharedModule
  ],
  exports: [
    ClassifyComponent
  ]
})

export class ClassifyModule { }