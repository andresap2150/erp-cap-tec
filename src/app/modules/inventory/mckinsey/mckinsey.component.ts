import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../core/activos.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ActivoTecnologico } from '../../../models/ActivoTecnologico';
import { Observable } from "rxjs";
import { ThrowStmt } from '@angular/compiler';
import { Chart,ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-mckinsey',
  templateUrl: './mckinsey.component.html',
  styleUrls: ['./mckinsey.component.scss']
})
export class MckinseyComponent implements OnInit {
  public displayedColumns = ['id_activo', 'nombre_activo','accion'];
  public activos$ : Observable<ActivoTecnologico[]>;
  public visibilidadMcEvaluar = false;
  public visibilidadbotonMC = false;
  public mcEvalForm : FormGroup;
  public activoActual;

  //variables del chart
  bubbleChartOptions: ChartOptions = {
    responsive: false,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 1,
            max: 5,
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
  bubbleChartLegend = true;
  bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 3, y: 3, r: 10  },
        { x: 4, y: 2, r: 10  },
      ],
      label: 'ACT-001'
    },
    {
      data: [
        { x: 1, y: 1, r: 10 },
        { x: 2, y: 2, r: 10  },
        { x: 5, y: 3, r: 10  },
      ],
      label: 'ACT-002'
    },

  ];

  constructor(private db: ActivosService, private fb: FormBuilder) { }

  ngOnInit(): void {
  	this.activos$ = this.db.getTodosActivos();
  	this.mcEvalForm = this.fb.group({
      mcEval : [[Validators.min(1),Validators.max(5)]],
      mcImpo : [[Validators.min(1),Validators.max(3)]]
  	})
  }

  startMcEvaluation(activo){
  	this.activoActual = activo;
  	console.log("se va a mostar el mc evaluar")
    this.visibilidadMcEvaluar = true;
    this.visibilidadbotonMC = false;
  }

  guardarMcEvaluation(){
  	console.log("se va a mostar el boton, tiene la logica de que todos esten evaluados")
  	if(this.mcEvalForm.valid){
      const activoMcEv = {...this.activoActual, ...this.mcEvalForm.value, mcEvalDone:true}
      this.db.extendActivo(activoMcEv);
      this.visibilidadMcEvaluar = false;
      this.visibilidadbotonMC = true;
      this.mcEvalForm.reset()
    }
  }

  generarAnalisisMc(){
    this.visibilidadbotonMC = false;
  }

}
