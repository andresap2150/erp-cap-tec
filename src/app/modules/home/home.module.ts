import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CaptureModule } from '../inventory/capture/capture.module';
import { ClassifyModule } from '../inventory/classify/classify.module';
import { RegisterModule } from '../contracts/register/register.module';
import { EvaluateModule } from '../inventory/evaluate/evaluate.module';
import { MckinseyModule } from '../inventory/mckinsey/mckinsey.module';
import { ViewAllModule } from '../contracts/view-all/view-all.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
  	SharedModule,
    LayoutModule,
    HomeRoutingModule,
    CaptureModule,
    ClassifyModule,
    RegisterModule,
    EvaluateModule,
    MckinseyModule,
    ViewAllModule
  ]
})
export class HomeModule { }
