import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
//gestion inventario
import { CaptureModule } from '../inventory/capture/capture.module';
import { ClassifyModule } from '../inventory/classify/classify.module';
import { ViewClassificationModule } from '../inventory/view-classification/view-classification.module';
import { EvaluateModule } from '../inventory/evaluate/evaluate.module';
import { ViewEvaluationModule } from '../inventory/view-evaluation/view-evaluation.module';
import { MckinseyModule } from '../inventory/mckinsey/mckinsey.module';
import { ViewMKEvalModule } from '../inventory/view-mkeval/view-mkeval.module';
//gestion proteccion
import { RegisterModule } from '../contracts/register/register.module';
import { ViewAllModule } from '../contracts/view-all/view-all.module';
import { CrearPatenteModule } from '../patentes/crear-patente/crear-patente.module';
import { ListarPatentesModule } from '../patentes/listar-patentes/listar-patentes.module';
import { CargarFormatosModule } from '../patentes/cargar-formatos/cargar-formatos.module';
import { ListarFormatosModule } from '../patentes/listar-formatos/listar-formatos.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
  	SharedModule,
    LayoutModule,
    HomeRoutingModule,
    CaptureModule,
    ClassifyModule,
    ViewClassificationModule,
    EvaluateModule,
    ViewEvaluationModule,
    MckinseyModule,
    ViewMKEvalModule,
    RegisterModule,
    ViewAllModule,
    CrearPatenteModule,
    ListarPatentesModule,
    CargarFormatosModule,
    ListarFormatosModule,  
  ]
})
export class HomeModule { }
