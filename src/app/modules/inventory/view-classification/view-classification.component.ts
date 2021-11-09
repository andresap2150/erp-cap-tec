import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivoTecnologico } from 'src/app/models/ActivoTecnologico';
import { ActivosService } from '../../core/activos.service';

@Component({
  selector: 'app-view-classification',
  templateUrl: './view-classification.component.html',
  styleUrls: ['./view-classification.component.scss']
})
export class ViewClassificationComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo', 'iot', 'iotCode', 'mp','mpCode','gi','giCode', 'ut', 'utCode'];
  public activos$ : Observable<ActivoTecnologico[]>;

  constructor(private db: ActivosService) { }

  ngOnInit(): void {
    this.activos$ = this.db.getTodosActivos();
  }

}
