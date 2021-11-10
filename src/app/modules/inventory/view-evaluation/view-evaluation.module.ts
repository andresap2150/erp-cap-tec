import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEvaluationComponent } from './view-evaluation.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ViewEvaluationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ViewEvaluationComponent
  ]
})
export class ViewEvaluationModule { }
