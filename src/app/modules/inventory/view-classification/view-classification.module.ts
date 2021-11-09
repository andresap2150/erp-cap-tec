import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewClassificationComponent } from './view-classification.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ViewClassificationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ViewClassificationComponent
  ]
})
export class ViewClassificationModule { }
