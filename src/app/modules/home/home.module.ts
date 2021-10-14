import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CaptureModule } from '../inventory/capture/capture.module';
import { ListaPatentesModule } from '../patentes/lista-patentes/lista-patentes.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
  	SharedModule,
    LayoutModule,
    HomeRoutingModule,
    CaptureModule,
    ListaPatentesModule,
  ]
})
export class HomeModule { }
