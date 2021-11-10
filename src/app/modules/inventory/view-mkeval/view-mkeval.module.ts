import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMKEvalComponent } from './view-mkeval.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ViewMKEvalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ViewMKEvalComponent
  ]
})
export class ViewMKEvalModule { }
