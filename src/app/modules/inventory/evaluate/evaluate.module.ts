import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateComponent } from './evaluate.component';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [
    EvaluateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EvaluateComponent
  ]
})
export class EvaluateModule { }
