import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListaPatentes } from '../../../models/ListaPatentes';
import { ListaPatentesService } from '../../core/lista-patentes.service';
import { Observable } from "rxjs";
import { Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-patentes',
  templateUrl: './lista-patentes.component.html',
  styleUrls: ['./lista-patentes.component.scss']
})
export class ListaPatentesComponent implements OnInit {
  public displayedColumns = ['id_urlwebsite', 'path_urlwebsite', 'desc_urlwebsite'];
  public listapatentes$ : Observable<ListaPatentes[]>;
  public listapatentesForm : FormGroup;

  constructor(private db: ListaPatentesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listapatentes$ = this.db.getListaPatentes();
  	this.listapatentesForm = this.fb.group({
  	  id_urlwebsite: ['', Validators.required],
  	  path_urlwebsite: ['',Validators.required, Validators.minLength(20)],
  	  desc_urlwebsite: ['', Validators.required]
  	})
  }
  public saveListaPatentesOnDB(){
  	this.checkFormValidity(()=>this.db.addListaPatentes(this.listapatentesForm.value));
  	//TODO: evaluar si la insersion en BD fue correcta antes de resetear
  	this.listapatentesForm.reset();
  }
  private checkFormValidity(cb) {
    if (this.listapatentesForm.valid) {
      cb();
    } else {
      console.log("debe ingresar todos los datos requeridos")
    }
  }
  public getErrorMessage(controlName: string, errorName: string): string {
    const control = this.listapatentesForm.get(controlName);
    let errorMessage = "";
    if(control != null){
      if (control.hasError("required"))
        errorMessage = "Debe ingresar un valor";
      if(control.hasError("minLength"))
        errorMessage = "La URL debe tener mas de 20 caracteres de largo";
    }
    return errorMessage;
  }

  public deleteListaPatentesOnDB(id){
  	this.db.deleteListaPatentes(id);
  }
}
