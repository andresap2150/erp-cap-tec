import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../core/activos.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ActivoTecnologico } from '../../../models/ActivoTecnologico';
import { Observable, of, Subject } from "rxjs";

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo','accion'];  
  public displayedColumnseAnaPr = ['modeSum','maduSum','inflSum','proySum'];
  public displayedColumnsAna = ['id_activo','nombre_activo','mode','madu','infl','proy'];

  public activos$ : Observable<ActivoTecnologico[]>;
  public evalActivosForm : FormGroup;
  public visibilidadEvaluarActivosCard =false;
  public visibilidadGenerarAnalisis : Observable<boolean>;
  public visibilidadErrorGuardar = false;
  public visibilidadTablaP = false
  public visibilidadTablaE = true;
  public activoActual;
  public avgmod;

  constructor(private db: ActivosService, private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
  	this.activos$ = this.db.getTodosActivos();
  	this.evalActivosForm = this.fb.group({
  	  madu : ['',[Validators.min(1),Validators.max(5)]],
  	  mode : ['',[Validators.min(1),Validators.max(4)]],
  	  infl : ['',[Validators.min(1),Validators.max(5)]],
  	  proy : ['',[Validators.min(1),Validators.max(5)]]
  	});
    this.visibilidadGenerarAnalisis = this.db.areAllActivosEvaluated();    
    this.db.getAverageEvaluation().subscribe(a=>{return a});     
  }


  startEvaluation(activo){
    this.activoActual = activo;
    this.visibilidadEvaluarActivosCard = true;  
  }

  guardarEvaluacionActivo(){
    if(this.evalActivosForm.valid){
      const activoEvaluado = {...this.activoActual, ...this.evalActivosForm.value, evaluationDone: true}
      this.db.extendActivo(activoEvaluado);
      this.visibilidadEvaluarActivosCard =false;
      this.evalActivosForm.reset();
    }else{
      this.visibilidadErrorGuardar= true;
    }
  }

  analizar(){
    this.visibilidadTablaE = false;
    this.avgmod = this.db.getPromedios();  
    this.visibilidadTablaP = true;
  }
}