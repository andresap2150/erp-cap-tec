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
  public nombreActivoActual = "provisional";

  constructor(private db: ActivosService, private fb: FormBuilder) { }

  ngOnInit(): void {
  	this.activos$ = this.db.getTodosActivos();
  }

  startClassification(id){
  	console.log('lol ..............')
  }

}
