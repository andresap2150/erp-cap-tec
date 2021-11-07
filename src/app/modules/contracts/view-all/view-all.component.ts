import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrato } from 'src/app/models/Contrato';
import { ContractsService } from '../../core/contracts.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {
  public contrato$ : Observable<Contrato[]>;
  public contratos : Contrato[];

  constructor(private db : ContractsService) { }

  ngOnInit(): void {
    this.contrato$ = this.db.getTodosContratos();
    this.contrato$.subscribe(a=>{
      this.contratos = a;
    })
  }
}
