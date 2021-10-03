import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    LayoutModule
  ]
})
export class HomeModule { }
