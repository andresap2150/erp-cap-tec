import { Injectable } from '@angular/core';
import { AngularFirestore,DocumentReference,DocumentData, AngularFirestoreCollection} from '@angular/fire/compat/firestore'

import { ActivoTecnologico } from '../../models/ActivoTecnologico'
import { throwError,Observable,Subject,of } from "rxjs";
import { catchError, map, every,filter,tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  public activos;
  //activos : ActivoTecnologico[];

  constructor(private afStore: AngularFirestore) { }

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

  async getActivosCollectionsPromise(): Promise<AngularFirestoreCollection<ActivoTecnologico>>{
    return this.afStore.collection("activos")
  }
}
