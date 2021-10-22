import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivoTecnologico } from '../../../models/ActivoTecnologico';
import { ActivosService } from '../../core/activos.service';
import { Observable } from "rxjs";
import { Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo', 'ref_activo', 'desc_activo', 'image','cant','accion'];
  public activos$ : Observable<ActivoTecnologico[]>;
  public activosForm : FormGroup;

  constructor(private db: ActivosService, private fb: FormBuilder) { }

  ngOnInit() {
  	this.activos$ = this.db.getTodosActivos();
  	this.activosForm = this.fb.group({
  	  id_activo: ['', Validators.required],
  	  nombre_activo: ['',Validators.minLength(6)],
  	  ref_activo: ['', Validators.required],
  	  desc_activo: [''],
  	  image: [''],
  	  cant: [0, [Validators.required, Validators.min(1)]]
  	})
  }

  public saveActivoOnDB(){
  	this.checkFormValidity(()=>this.db.addActivos(this.activosForm.value));
  	//TODO: evaluar si la insersion en BD fue correcta antes de resetear
  	this.activosForm.reset();
  }

  private checkFormValidity(cb) {
    if (this.activosForm.valid) {
      cb();
    } else {
      //this.errorMessages$.next("Please enter correct Email and Password value");
      console.log("debe ingresar todos los datos requeridos")
    }
  }

  public getErrorMessage(controlName: string, errorName: string): string {
    //TODO: si queda tiempo diseñar una forma para no repetir este codigo esta en LoginComponent
    const control = this.activosForm.get(controlName);
    let errorMessage = "";
    if(control != null){
      if (control.hasError("required"))
        errorMessage = "Debe ingresar un valor";
      if(control.hasError("min"))
        errorMessage = "La cantidad debe ser mayor a 0";
    }
    return errorMessage;
  }

  public deleteActivoOnDB(id){
  	this.db.deleteActivo(id);
  }   
}

