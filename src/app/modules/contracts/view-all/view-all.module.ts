import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ViewAllComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ViewAllComponent
  ]
})
export class ViewAllModule { }
