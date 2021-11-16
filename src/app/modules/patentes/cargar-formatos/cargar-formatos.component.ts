import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PatenteService } from '../../core/patente.service';


@Component({
  selector: 'app-cargar-formatos',
  templateUrl: './cargar-formatos.component.html',
  styleUrls: ['./cargar-formatos.component.scss']
})
export class CargarFormatosComponent implements OnInit {
  crearPatente: FormGroup;
  submitted=false;
  //loading = false;
  id: string | null;
  //tituloPag = 'Agregar Patente';
  constructor(private fb: FormBuilder, 
    private _patenteService: PatenteService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) { 
      this.crearPatente=this.fb.group({
        titulo:['', Validators.required],
        descripcion:['', Validators.required],
        fechaSolicitud:['', Validators.required],
        fechaPublicacion:['', Validators.required],
        fechaCaducidad:['', Validators.required],
        fechaPresentacion:['', Validators.required],
        creadores:['', Validators.required]
        })
        this.id = this.aRoute.snapshot.paramMap.get('id');
        console.log(this.id)
    }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarPatente() {
    this.submitted = true;

    if (this.crearPatente.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarPatente();
    } else {
      this.editarPatente(this.id);
    }

  }

  agregarPatente(){
    
    const patente: any = {
      titulo: this.crearPatente.value.titulo,
      descripcion: this.crearPatente.value.descripcion,
      fechaSolicitud: this.crearPatente.value.fechaSolicitud,
      fechaPublicacion: this.crearPatente.value.fechaPublicacion,
      fechaCaducidad: this.crearPatente.value.fechaCaducidad,
      fechaPresentacion: this.crearPatente.value.fechaPresentacion,
      creadores: this.crearPatente.value.creadores,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    } 
    this._patenteService.agregarPatente(patente).then(() => {
      this.toastr.success('La patente fue registrada con éxito!', 'Patente Registrada')
    }).catch(error => {
    console.log(error);
    })
  }

  editarPatente(id: string) {

    const patente: any = {
      titulo: this.crearPatente.value.titulo,
      descripcion: this.crearPatente.value.descripcion,
      fechaSolicitud: this.crearPatente.value.fechaSolicitud,
      fechaPublicacion: this.crearPatente.value.fechaPublicacion,
      fechaCaducidad: this.crearPatente.value.fechaCaducidad,
      fechaPresentacion: this.crearPatente.value.fechaPresentacion,
      creadores: this.crearPatente.value.creadores,
      fechaActualizacion: new Date()
    }
    this._patenteService.actualizarPatente(id, patente).then(() => {
      this.toastr.info('La patente fue modificada con éxito', 'Patente modificada')
    })
  }

 
 
  esEditar() {
    if (this.id !== null) {
      this._patenteService.getPatente(this.id).subscribe(data => {
        this.crearPatente.setValue({
          titulo: data.payload.data()['titulo'],
          descripcion: data.payload.data()['descripcion'],
          fechaSolicitud: data.payload.data()['fechaSolicitud'],
          fechaPublicacion: data.payload.data()['fechaPublicacion'],
          fechaCaducidad: data.payload.data()['fechaCaducidad'],
          fechaPresentacion: data.payload.data()['fechaPresentacion'],
          creadores: data.payload.data()['creadores'],
        })
      })
    }
  }
}