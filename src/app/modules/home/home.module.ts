import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { HeaderComponent } from '../layout/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
  ]
})
export class HomeModule { }
