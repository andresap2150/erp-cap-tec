import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
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
  	return this.afStore.collection("activos")
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
}
