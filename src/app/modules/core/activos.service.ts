import { Injectable } from '@angular/core';
import { AngularFirestore,DocumentReference,DocumentData, AngularFirestoreCollection} from '@angular/fire/compat/firestore'

import { ActivoTecnologico } from '../../models/ActivoTecnologico'
import { throwError,Observable,Subject,of } from "rxjs";
import { catchError, map, every,filter,tap,reduce, scan } from "rxjs/operators";
import { ContentObserver } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  public activos;
  public promedios;
  //activos : ActivoTecnologico[];

  constructor(private afStore: AngularFirestore) {
    this.getAverageEvaluation();
  }

  getTodosActivos(){
  	return this.getActivosCollections()
  	  .snapshotChanges()
  	  .pipe(
  	  	map(spsh =>
  	      spsh.map(a =>{
  	      	const data = a.payload.doc.data() as ActivoTecnologico
  	      	const id = a.payload.doc.id;
  	      	return {id, ...data}
  	      })
  	  	), catchError(e => throwError(e))
  	  );
  }

  addActivos(data) {
  	const timestamp = new Date().getTime();
  	return this.getActivosCollections().add({
  	  ...data,
  	  fec_pub : timestamp
  	})
  }

  getActivosCollections(): AngularFirestoreCollection<ActivoTecnologico>{
  	return this.afStore.collection("activos")
  }

  deleteActivo(uid){
  	return this.getActivosCollections().doc(uid).delete();
  }

  extendActivo(data){
    console.log("se va a actualizar..",data);
    return this.getActivosCollections().doc(data.id).update(data);
  }

  areAllActivosEvaluated(){
    return this.getActivosCollections().valueChanges()
    .pipe(
      map(a => a.map(b => b["evaluationDone"])),
      every(a => (a.every(ev=> ev===true))===true )
    )
  }

  getAverageEvaluation(){
    console.log("average")
    const seed = {modeSum: 0, maduSum: 0, inflSum: 0, proySum: 0};
    const source = this.getActivosCollections().valueChanges();
    return source.pipe(
      reduce((acc, cur) => {
        let sum, sumMad, sumInf, sumPro;
        [sum, sumMad, sumInf, sumPro] = [0, 0, 0, 0];
        for (let i = 0; i < cur.length; i++) {
          sum += cur[i].mode;
          sumMad += cur[i].madu;
          sumInf += cur[i].infl;
          sumPro += cur[i].proy;
        }
        console.log('actual', cur);
        const modeSum = sum + acc.modeSum;
        const maduSum = sumMad + acc.maduSum;
        const inflSum = sumInf + acc.inflSum;
        const proySum = sumPro + acc.proySum;
        const promOb = { modeSum, maduSum, inflSum, proySum };
        this.setPromedios(modeSum,maduSum,inflSum,proySum)
        return { modeSum, maduSum, inflSum, proySum };
      }, seed),
      catchError(e => throwError(e))
    );
  }

  async getActivosCollectionsPromise(): Promise<AngularFirestoreCollection<ActivoTecnologico>>{
    return this.afStore.collection("activos")
  }

  private setPromedios(mod,mad,inf,pro){
    console.log("setting",mod)
    let promediosAx = {modeSum:mod, maduSum:mad,inflSum:inf,proySum:pro};
    this.promedios = [promediosAx];
  }

  public getPromedios(){
    return this.promedios;
  }
}
