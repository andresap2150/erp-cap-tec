import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MckinseyComponent } from './mckinsey.component';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [
    MckinseyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MckinseyComponent
  ]
})
export class MckinseyModule { }
