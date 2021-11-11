import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formatos } from 'src/app/models/Formatos';
import { FormatosService } from '../../core/formatos.service';

@Component({
  selector: 'app-listar-formatos',
  templateUrl: './listar-formatos.component.html',
  styleUrls: ['./listar-formatos.component.scss']
})

export class ListarFormatosComponent implements OnInit {
  public formato$ : Observable<Formatos[]>;
  public formatos : Formatos[];

  constructor(private db : FormatosService) { }

  ngOnInit(): void {
    this.formato$ = this.db.getTodosFormatos();
    this.formato$.subscribe(b=>{
      this.formatos = b;
    })
  }
}
