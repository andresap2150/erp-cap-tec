import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PatenteService } from 'src/app/modules/core/patente.service';

@Component({
  selector: 'app-listar-patentes',
  templateUrl: './listar-patentes.component.html',
  styleUrls: ['./listar-patentes.component.css']
})
export class ListarPatentesComponent implements OnInit {
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

  eliminarPatente(id: string) {
    this._patenteService.eliminarPatente(id).then(() => {
      //console.log('patente eliminada con exito')
      this.toastr.error('La patente fue eliminada con éxito', 'Patente eliminada!');
    }).catch(error => {
      console.log(error);
    })
  }

}