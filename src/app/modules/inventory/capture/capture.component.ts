import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {
  displayedColumns = ['id', 'nombre', 'referencia', 'descripcion', 'imagen','cantidad'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: ativoTecnologico[] = [
  {id:'ACT-01', nombre:'Cortadora vertical 8 pulgadas', referencia:'Jontex czd - 3', descripcion: 'Maquina de altura de corte de 8 pulgadas', imagen:'http//imagen', cantidad:1}
];

export interface ativoTecnologico {
  id: string;
  nombre: string;
  referencia: string;
  descripcion: string;
  imagen: string;
  cantidad: number;
}
