import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../core/activos.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ActivoTecnologico } from '../../../models/ActivoTecnologico';
import { Observable, Subject } from "rxjs";
import { Chart,ChartDataSets, ChartOptions } from 'chart.js';
import { AuthService, User } from '../../core/auth.service';

@Component({
  selector: 'app-mckinsey',
  templateUrl: './mckinsey.component.html',
  styleUrls: ['./mckinsey.component.scss']
})
export class MckinseyComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo','accion'];
  public activos$ : Observable<ActivoTecnologico[]>;
  public user$: Subject<User>;
  public visibilidadMcEvaluar = false;
  public visibilidadbotonMC = false;
  public visibilidadTbIni = true;
  public visibilidadChart = false;
  public mcEvalForm : FormGroup;
  public activoActual;
  public bubbleChartData : ChartDataSets[];
  public bubbleChartOptions : ChartOptions; 
  bubbleChartLegend = true;
  

  constructor(private db: ActivosService, private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.auth.user$;
  	this.activos$ = this.db.getTodosActivos();
  	this.mcEvalForm = this.fb.group({
      mcEval : [[Validators.min(1),Validators.max(5)]],
      mcImpo : [[Validators.min(1),Validators.max(3)]]
  	})
  }

  startMcEvaluation(activo){
  	this.activoActual = activo;
    this.visibilidadMcEvaluar = true;
    this.visibilidadbotonMC = false;
  }

  guardarMcEvaluation(){
  	if(this.mcEvalForm.valid){
      const activoMcEv = {...this.activoActual, ...this.mcEvalForm.value, mcEvalDone:true}
      this.db.extendActivo(activoMcEv);
      this.visibilidadMcEvaluar = false;
      this.visibilidadbotonMC = true;
      this.mcEvalForm.reset()
    }
    this.visibilidadbotonMC = true;
    
  }

  generarAnalisisMc(){
    this.createChartData();
    this.visibilidadbotonMC = false;
    this.visibilidadTbIni = false;
    this.visibilidadChart = true;
  }

  createChartData(){   
    this.bubbleChartOptions = {
      responsive: false,
      scales: {
        xAxes: [
          {
            ticks: {
              min: 1,
              max: 3,
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 1,
              max: 3,
            }
          }
        ]
      }
    };

    this.bubbleChartData = [];
    this.activos$.subscribe((a:ActivoTecnologico[]) =>{
      console.log(a)
      a.forEach(ac =>{
        const yval = ((ac.mcEval)/5)*3; 
        const data = [{x:ac.mcImpo, y:yval, r:20}];
        const label = ac.id_activo;
        const axl = {data,label};
        this.bubbleChartData.push(axl);
      });
    });  
  }
}
