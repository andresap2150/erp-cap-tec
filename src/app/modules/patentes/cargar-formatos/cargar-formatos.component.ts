import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormatosService } from './../../core/formatos.service';

@Component({
  selector: 'app-cargar-formatos',
  templateUrl: './cargar-formatos.component.html',
  styleUrls: ['./cargar-formatos.component.scss']
})
export class CargarFormatosComponent implements OnInit {
  public formatoForm : FormGroup;
  public formatoFPath : string;

  constructor(private fs: FormatosService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formatoForm = this.fb.group({
      nombreCol : ['',Validators.required],
      cargoCol : ['',Validators.required],
      tipoIdCol : ['',Validators.required],
      idCol: ['',Validators.required],
      filepath : ['',Validators.required],
      clausulaProte : ['',Validators.required],
      vencimiento : ['', Validators.required]
    })
  }

  upload(event) {    
    this.formatoFPath = event.target.files[0]
  }

  uploadFormato(){
    this.fs.uploadFormato(this.formatoFPath);
  }

  saveFormatoOnDb(){
    this.uploadFormato();
    this.checkFormValidity(this.fs.addFormato(this.formatoForm.value));
    this.formatoForm.reset();
  }

  private checkFormValidity(cb) {
    if (this.formatoForm.valid) {
      cb();
    } else {
      console.log("debe ingresar todos los datos requeridos")
    }
  }
}