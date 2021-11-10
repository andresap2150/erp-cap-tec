import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivoTecnologico } from 'src/app/models/ActivoTecnologico';
import { ActivosService } from '../../core/activos.service';

@Component({
  selector: 'app-view-mkeval',
  templateUrl: './view-mkeval.component.html',
  styleUrls: ['./view-mkeval.component.scss']
})
export class ViewMKEvalComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo', 'mcEval', 'mcImpo'];
  public activos$ : Observable<ActivoTecnologico[]>;

  constructor(private db: ActivosService) { }

  ngOnInit(): void {
    this.activos$ = this.db.getTodosActivos();
  }
}
