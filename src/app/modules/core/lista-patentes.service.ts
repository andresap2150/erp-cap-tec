import { Injectable } from '@angular/core';
import { AngularFirestore,DocumentReference,DocumentData  } from '@angular/fire/compat/firestore'
import { ListaPatentes } from '../../models/ListaPatentes'
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ListaPatentesService {

  constructor(private afStore: AngularFirestore) { }

  getListaPatentes(){
  	return this.getListaPatentesCollections()
  	  .snapshotChanges()
  	  .pipe(
  	  	map(spsh =>
  	      spsh.map(a =>{
  	      	const data = a.payload.doc.data() as ListaPatentes
  	      	const id = a.payload.doc.id;
  	      	return {id, ...data}
  	      })
  	  	), catchError(e => throwError(e))
  	  );
  }

  addListaPatentes(data) {
  	const timestamp = new Date().getTime();
  	return this.getListaPatentesCollections().add({
  	  ...data,
  	  fec_pub : timestamp
  	})
  }

  getListaPatentesCollections(){
  	return this.afStore.collection("lista-patentes")
  }

  deleteListaPatentes(uid){
  	return this.getListaPatentesCollections().doc(uid).delete();
  }
}
