import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../core/activos.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ActivoTecnologico } from '../../../models/ActivoTecnologico';
import { Observable } from "rxjs";

@Component({
  selector: 'app-mckinsey',
  templateUrl: './mckinsey.component.html',
  styleUrls: ['./mckinsey.component.scss']
})
export class MckinseyComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo','accion'];
  public activos$ : Observable<ActivoTecnologico[]>;
  public visibilidadMcEvaluar = false;
  public visibilidadbotonMC = false;
  public mcEvalForm : FormGroup;
  public activoActual;

  constructor(private db: ActivosService, private fb: FormBuilder) { }

  ngOnInit(): void {
  	this.activos$ = this.db.getTodosActivos();
  	this.mcEvalForm = this.fb.group({
      mcEval : [[Validators.min(1),Validators.max(5)]],
      mcImpo : [[Validators.min(1),Validators.max(3)]]
  	})
  }

  startMcEvaluation(activo){
  	this.activoActual = activo;
  	console.log("se va a mostar el mc evaluar")
    this.visibilidadMcEvaluar = true;
    this.visibilidadbotonMC = false;
  }

  guardarMcEvaluation(){
  	console.log("se va a mostar el boton, tiene la logica de que todos esten evaluados")
  	this.visibilidadMcEvaluar = false;
    this.visibilidadbotonMC = true;
  }


  generarAnalisisMc(){
    this.visibilidadbotonMC = false;
  }

}
