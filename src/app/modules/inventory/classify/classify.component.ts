import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../core/activos.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ActivoTecnologico } from '../../../models/ActivoTecnologico';
import { Observable } from "rxjs";

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})
export class ClassifyComponent implements OnInit {
  //TODO: si queda tiempo diseñar una forma para no repetir este codigo que esta en CaptureComponent
  public displayedColumns = ['id_activo', 'nombre_activo','accion'];
  public activos$ : Observable<ActivoTecnologico[]>;
  public clasactivosForm : FormGroup;
  public activoActual;
  public visibilidadCardActivos = false;
  public visibilidadCodigosInfo = false;


  constructor(private db: ActivosService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activos$ = this.db.getTodosActivos();
    this.clasactivosForm = this.fb.group({
      iot : ['', Validators.required],
      gi : ['',  Validators.required],
      mp : ['', Validators.required],
      ut : ['', Validators.required]
    })
  }

  startClassification(activo){
    this.activoActual= activo;
    console.log("se va a clasificar:",this.activoActual)
    this.visibilidadCardActivos = true;
    this.visibilidadCodigosInfo = false;
  }

  generarCodigos(){
    //aca va el codigo para consultar la secuencia y generar los codigos de clasificacion
    if(this.clasactivosForm.valid){
      this.visibilidadCardActivos = false;
      this.visibilidadCodigosInfo = true;
    }
  }


  guardarClasificacion(){
    //actualizar el activo
    //this.activo["tanoint"] = this.clasactivosForm.value[]
    console.log("valores en guardarClasificacion",this.clasactivosForm.value)
    const activoClasificado = {...this.activoActual, ...this.clasactivosForm.value, calificationDone: true}
    this.visibilidadCardActivos = false;
    this.visibilidadCodigosInfo = false;
    this.db.extendActivo(activoClasificado);
    this.clasactivosForm.reset();
  }
}
