import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './modules/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';

//componentes
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ListarPatentesComponent } from './modules/patentes/listar-patentes/listar-patentes.component';
import { CrearPatenteComponent } from './modules/patentes/crear-patente/crear-patente.component';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
}; 

@NgModule({
  declarations: [
    AppComponent,
    ListarPatentesComponent,
    CrearPatenteComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    ToastrModule.forRoot() // Agrega ToastrModule
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }