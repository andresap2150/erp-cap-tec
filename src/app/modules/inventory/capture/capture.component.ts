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
  public displayedColumns = ['id_activo', 'nombre_activo', 'ref_activo', 'desc_activo', 'image','cant'];
  public activos$ : Observable<ActivoTecnologico[]>;
  public activosForm : FormGroup;

  constructor(private db: ActivosService) { }

  ngOnInit() {
  	this.activos$ = this.db.getTodosActivos();
  }

}

