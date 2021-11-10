import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivoTecnologico } from 'src/app/models/ActivoTecnologico';
import { ActivosService } from '../../core/activos.service';

@Component({
  selector: 'app-view-evaluation',
  templateUrl: './view-evaluation.component.html',
  styleUrls: ['./view-evaluation.component.scss']
})
export class ViewEvaluationComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo', 'madu', 'mode', 'infl','proy'];
  public activos$ : Observable<ActivoTecnologico[]>;

  constructor(private db: ActivosService) { }

  ngOnInit(): void {
    this.activos$ = this.db.getTodosActivos();
  }

}
