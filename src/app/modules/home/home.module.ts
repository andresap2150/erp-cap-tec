import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CaptureModule } from '../inventory/capture/capture.module'


@NgModule({
  declarations: [HomeComponent],
  imports: [
  	SharedModule,
    LayoutModule,
    HomeRoutingModule,
    CaptureModule
  ]
})
export class HomeModule { }
