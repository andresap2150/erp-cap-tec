export interface ActivoTecnologico {
  id_activo: string;	
  id?: string;
  nombre_activo: string;
  ref_activo: string;
  desc_activo?: string;
  image?: string;
  cant: number;
  evaluationDone: boolean;
  madu: number;
  mode: number;
  infl: number;
  proy: number;
  mcEvalDone : boolean;
  mcEval: number;
  mcImpo: number;
  iot: string;
  iotCode: string;
  mp: string;
  mpCode: string;
  gi: string;
  giCode: string;
  ut: string;
  utCode:string;
}
