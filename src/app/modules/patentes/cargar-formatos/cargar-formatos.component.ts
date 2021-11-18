import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PatenteService } from '../../core/patente.service';
import { FormatosService } from './../../core/formatos.service';

@Component({
  selector: 'app-cargar-formatos',
  templateUrl: './cargar-formatos.component.html',
  styleUrls: ['./cargar-formatos.component.scss']
})
export class CargarFormatosComponent implements OnInit {
  
  constructor(private fb: FormBuilder, 
    private _patenteService: PatenteService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private formatosService: FormatosService
    ) { 
      }
  ngOnInit(): void {  }

  petitorios: any[] = [];
  cargarFormatoPetitorio(event: any) {
    let archivos = event.target.files;
    let nombre = "petitorios";

    for (let i = 0; i < archivos.length; i++) {
      
      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        console.log(reader.result);
        this.petitorios.push(reader.result);
        this.formatosService.subirFormato(nombre + "_" + Date.now(), reader.result).then(urlImagen => {
          this.toastr.success('Los petitorios fueron cargados con éxito!', 'Adjuntos cargados')
          let petitorios = {
            name: "petitorios",
            rutapetitorios: urlImagen
          }
          console.log(urlImagen);
        });
      }
    }
  }

  poderes: any[] = [];
  cargarFormatoPoder(event: any) {
    let archivos = event.target.files;
    let nombre = "poderes";

    for (let i = 0; i < archivos.length; i++) {
      
      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        console.log(reader.result);
        this.poderes.push(reader.result);
        this.formatosService.subirFormato(nombre + "_" + Date.now(), reader.result).then(urlImagen => {
          this.toastr.success('Los poderes fueron cargados con éxito!', 'Adjuntos cargados')
          let poderes = {
            name: "poderes",
            rutapoderes: urlImagen
          }
          console.log(urlImagen);
        });
      }
    }
  }
  solNacionales: any[] = [];
  cargarFormatosSolNal(event: any) {
    let archivos = event.target.files;
    let nombre = "solicitud_nacional";

    for (let i = 0; i < archivos.length; i++) {
      
      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        console.log(reader.result);
        this.solNacionales.push(reader.result);
        this.formatosService.subirFormato(nombre + "_" + Date.now(), reader.result).then(urlImagen => {
          this.toastr.success('Las solicitudes fueron cargadas con éxito!', 'Adjuntos cargados')
          let sol_nacionales = {
            name: "solicitud_nacional",
            rutaSolNacionales: urlImagen
          }
          console.log(urlImagen);
        });
      }
    }
  }
  solIntnales: any[] = [];
  cargarFormatosSolIntnal(event: any) {
    let archivos = event.target.files;
    let nombre = "solicitud_internacional";

    for (let i = 0; i < archivos.length; i++) {
      
      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        console.log(reader.result);
        this.solIntnales.push(reader.result);
        this.formatosService.subirFormato(nombre + "_" + Date.now(), reader.result).then(urlImagen => {
          this.toastr.success('Las solicitudes internacionales fueron cargadas con éxito!', 'Adjuntos cargados')
          let sol_internacionales = {
            name: "solicitud_internacional",
            rutaSolNacionales: urlImagen
          }
          console.log(urlImagen);
        });
      }
    }
  }
}