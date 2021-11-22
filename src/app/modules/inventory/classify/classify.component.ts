import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../core/activos.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ActivoTecnologico } from '../../../models/ActivoTecnologico';
import { Observable } from "rxjs";
import { SecuenciasService } from '../../core/secuencias.service';
import { scaleService } from 'chart.js';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})
export class ClassifyComponent implements OnInit {
  //TODO: si queda tiempo diseñar una forma para no repetir este codigo que esta en CaptureComponent
  public displayedColumns = ['id_activo', 'nombre_activo','accion'];
  public activos$ : Observable<ActivoTecnologico[]>;
  public clasactivosForm : FormGroup;
  public activoActual;
  public visibilidadCardActivos = false;
  public visibilidadCodigosInfo = false;

  public iotCode = "";
  public giCode = "";
  public mpCode = "";
  public utCode = "";


  constructor(private db: ActivosService, private fb: FormBuilder, private scService: SecuenciasService) { }

  ngOnInit(): void {
    this.activos$ = this.db.getTodosActivos();
    this.clasactivosForm = this.fb.group({
      iot : ['', Validators.required],
      gi : ['',  Validators.required],
      mp : ['', Validators.required],
      ut : ['', Validators.required]
    })
  }

  startClassification(activo){
    this.activoActual= activo;

    this.visibilidadCardActivos = true;
    this.visibilidadCodigosInfo = false;
  }

  generarCodigos(){
    this.clasactivosForm.value["iot"] === "Tangible" ? this.scService.getAsecuence("A-IT-T-").subscribe(a => this.setIotCode(a)) : this.scService.getAsecuence("A-IT-I-").subscribe(a => this.setIotCode(a))
    this.clasactivosForm.value["mp"] === "Dura" ? this.scService.getAsecuence("A-MP-D-").subscribe(a =>this.setMpCode(a)) : this.scService.getAsecuence("A-MP-B-").subscribe(a =>this.setMpCode(a));
    this.clasactivosForm.value["ut"] === "Know-how" ? this.scService.getAsecuence("A-UP-KH-").subscribe(a => this.setUtCode(a)) : this.scService.getAsecuence("A-UP-I-").subscribe(a => this.setUtCode(a));
    
    switch (this.clasactivosForm.value["gi"]){
      case "Humanware":
        this.scService.getAsecuence("A-GI-HU-").subscribe(a => this.setGiCode(a))
        break;
      case "Infoware":
        this.scService.getAsecuence("A-GI-IN-").subscribe(a => this.setGiCode(a))
        break;
      case "Hardware":
        this.scService.getAsecuence("A-GI-TEH-").subscribe(a => this.setGiCode(a))
        break;
      case "Software":
        this.scService.getAsecuence("A-GI-TES-").subscribe(a => this.setGiCode(a))
        break;
      case "Orgware":
        this.scService.getAsecuence("A-GI-OR-").subscribe(a => this.setGiCode(a))
        break;
    }

    if(this.clasactivosForm.valid){
      this.visibilidadCardActivos = false;
      this.visibilidadCodigosInfo = true;
    }
  }


  guardarClasificacion(){
    //actualizar el activo
    //this.activo["tanoint"] = this.clasactivosForm.value[]
    //onsole.log("valores en guardarClasificacion",this.clasactivosForm.value)
    const activoClasificado = {...this.activoActual, ...this.clasactivosForm.value, calificationDone: true, iotCode: this.iotCode, giCode:this.giCode, mpCode: this.mpCode, utCode: this.utCode}
    this.visibilidadCardActivos = false;
    this.visibilidadCodigosInfo = false;
    this.db.extendActivo(activoClasificado);

    this.clasactivosForm.value["iot"] === "Tangible" ? this.guardarCodigo(()=>this.scService.increaseSecuencia("A-IT-T-"),"A-IT-T-") :  this.guardarCodigo(()=>this.scService.increaseSecuencia("A-IT-I-"),"A-IT-I-") ;
    
    setTimeout(()=>{
      this.clasactivosForm.value["mp"] === "Dura" ? this.guardarCodigo(()=>this.scService.increaseSecuencia("A-MP-D-"), "A-MP-D-") : this.guardarCodigo(()=>this.scService.increaseSecuencia("A-MP-B-"), "A-MP-B-");
    },400)

    setTimeout(()=>{
      this.clasactivosForm.value["ut"] === "Know-how" ? this.guardarCodigo(()=>this.scService.increaseSecuencia("A-UP-KH-"), "A-UP-KH-") : this.guardarCodigo(()=>this.scService.increaseSecuencia("A-UP-I-"), "A-UP-I-");
    },700)

    setTimeout(()=>{
      switch (this.clasactivosForm.value["gi"]){
        case "Humanware":
          this.guardarCodigo(()=>this.scService.increaseSecuencia("A-GI-HU-"),"A-GI-HU-")
          break;
        case "Infoware":
          this.guardarCodigo(()=>this.scService.increaseSecuencia("A-GI-IN-"),"A-GI-IN-")
          break;
        case "Hardware":
          this.guardarCodigo(()=>this.scService.increaseSecuencia("A-GI-TEH-"),"A-GI-TEH-")
          break;
        case "Software":
          this.guardarCodigo(()=>this.scService.increaseSecuencia("A-GI-TES-"),"A-GI-TES-")
          break;
        case "Orgware":
          this.guardarCodigo(()=>this.scService.increaseSecuencia("A-GI-OR-"),"A-GI-OR-")
          break;
      }
      this.clasactivosForm.reset();
    },1250)
    
  }

  guardarCodigo(cb, secuencia){
    this.scService.getASecuencia(secuencia).subscribe(a =>console.log("secuencia int", a));
    setTimeout(()=>cb(),300);
  }

  private setIotCode(code){
    this.iotCode = code;
  }

  private setMpCode(code){
    this.mpCode = code;
  }

  private setGiCode(code){
    this.giCode = code;
  }

  private setUtCode(code){
    this.utCode = code;
  }
}
