import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CaptureModule } from '../inventory/capture/capture.module';
import { ClassifyModule } from '../inventory/classify/classify.module';
import { EvaluateModule } from '../inventory/evaluate/evaluate.module';
import { MckinseyModule } from '../inventory/mckinsey/mckinsey.module'


@NgModule({
  declarations: [HomeComponent],
  imports: [
  	SharedModule,
    LayoutModule,
    HomeRoutingModule,
    CaptureModule,
    ClassifyModule,
    EvaluateModule,
    MckinseyModule
  ]
})
export class HomeModule { }
