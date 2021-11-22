import { ContentObserver } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage  } from '@angular/fire/compat/storage';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Contrato } from 'src/app/models/Contrato';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  downloadUrl$ : Observable<string>;

  constructor(private afStorage: AngularFireStorage, private afStore: AngularFirestore) { }

  uploadContract(file){
    const actualD = new Date().getTime();
    const fPath = '/contratos/'+actualD+file["name"];
    console.log("fpfile",fPath)
    this.downloadUrl$ = from(this.afStorage.upload(fPath, file)).pipe(
      switchMap((_)=>this.afStorage.ref(fPath).getDownloadURL())
    );
  }

  getContractsCollections(){
    return this.afStore.collection("contratos");
  }

  addContract(data){    
    const timestamp = new Date().getTime();
    console.log("time:",this.downloadUrl$);
    this.downloadUrl$.subscribe(a => {     
      return this.getContractsCollections().add({
        nombre : data["nombreCol"],
        tipoId : data["tipoIdCol"],
        identificacion : data["idCol"],
        cargo : data["cargoCol"],
        clausula : data["clausulaProte"],
        fechaVigencia : timestamp,
        rutaArchivo: a,
        fechaCreacion : timestamp
      })
    });    
  }

  getTodosContratos(){
    return this.getContractsCollections()
      .snapshotChanges()
      .pipe(
        map(spsh=>
          spsh.map(a=>{
            const data = a.payload.doc.data() as Contrato
            const idf = a.payload.doc.id;
            return {idf, ...data}
          })
        ), catchError(e => throwError(e))
      );
  }
}
