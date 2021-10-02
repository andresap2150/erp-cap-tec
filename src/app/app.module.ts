import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

import { CoreModule } from './modules/core/core.module';
import { LayoutModule } from './modules/layout/layout.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
