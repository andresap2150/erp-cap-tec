import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatenteService } from './../../core/patente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-patente',
  templateUrl: './crear-patente.component.html',
  styleUrls: ['./crear-patente.component.scss']
})
export class CrearPatenteComponent implements OnInit {
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
    //this.submitted=true;
    //if(this.crearPatente.invalid){ 
    //  return;
    
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
    //this.loading = true;
    this._patenteService.agregarPatente(patente).then(() => {
      //console.log('patente registrada con ??xito');
      this.toastr.success('La patente fue registrada con ??xito!', 'Patente Registrada')
      //this.router.navigate(['/listar-patentes'])
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
    //this.loading = true;
    this._patenteService.actualizarPatente(id, patente).then(() => {
      //this.loading = false;
      this.toastr.info('La patente fue modificada con ??xito', 'Patente modificada')
      //this.router.navigate(['/listar-patentes']);
    })
  }

 
 
  esEditar() {
    //this.tituloPag = 'Editar Patente'
    if (this.id !== null) {
      //this.loading = true;
      this._patenteService.getPatente(this.id).subscribe(data => {
        //this.loading = false;
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