import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Formatos } from 'src/app/models/Formatos';
import { FormatosService } from '../../core/formatos.service';
import { PatenteService } from '../../core/patente.service';

@Component({
  selector: 'app-listar-formatos',
  templateUrl: './listar-formatos.component.html',
  styleUrls: ['./listar-formatos.component.scss']
})

export class ListarFormatosComponent implements OnInit {
  patentes: any[] = [];
  constructor(private _patenteService: PatenteService, 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPatentes()
  }
  getPatentes() {
    this._patenteService.getPatentes().subscribe(data => {
      this.patentes = [];
      data.forEach((element: any) => {
        this.patentes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.patentes);
    });
  }

}