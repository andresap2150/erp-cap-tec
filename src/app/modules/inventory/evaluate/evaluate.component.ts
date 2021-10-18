import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../core/activos.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ActivoTecnologico } from '../../../models/ActivoTecnologico';
import { Observable, of, Subject } from "rxjs";
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo','accion'];
  public displayedColumnseAna = ['modeSum','maduSum','inflSum','proySum'];
  public activos$ : Observable<ActivoTecnologico[]>;
  public evalActivosForm : FormGroup;
  public visibilidadEvaluarActivosCard =false;
  public visibilidadGenerarAnalisis : Observable<boolean>;
  public visibilidadErrorGuardar = false;
  public visibilidadTablaP = false
  public activoActual;
  public avgmod;

  //public test = of([{modeSum:2}])
  public test = [{modeSum:2}]

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
    console.log('vamos a analizar...');
    this.avgmod = this.db.getPromedios();  
    console.log("pr",this.db.promedios)
    console.log("av",this.avgmod)
    this.visibilidadTablaP = true;
    //this.visibilidadGenerarAnalisis$.next(false);
    //this.visibilidadGenerarAnalisis = new Observable(a => a.next(false));
  }
}