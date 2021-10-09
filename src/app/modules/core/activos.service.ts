import { Injectable } from '@angular/core';
import { AngularFirestore,DocumentReference,DocumentData  } from '@angular/fire/compat/firestore'
import { ActivoTecnologico } from '../../models/ActivoTecnologico'
import { catchError,tap, map } from "rxjs/operators";
import { Observable, throwError, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

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

  getActivosCollections(){
  	return this.afStore.collection("activos")
  }

  deleteActivo(uid){
  	return this.getActivosCollections().doc(uid).delete();
  }
}
