import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { MatTableModule } from '@angular/material/table';


const SHARED_MODULES = [
  CommonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatInputModule,
  MatMenuModule,
  RouterModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatTableModule
];

const SHARED_COMPONENTS = [];

@NgModule({
  imports: [...SHARED_MODULES],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_MODULES,...SHARED_COMPONENTS]
})
export class SharedModule { }
