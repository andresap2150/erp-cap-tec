import { ContentObserver } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage  } from '@angular/fire/compat/storage';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Formatos } from 'src/app/models/Formatos';

@Injectable({
  providedIn: 'root'
})
export class FormatosService {
  downloadUrl$ : Observable<string>;

  constructor(private afStorage: AngularFireStorage, private afStore: AngularFirestore) { }

  uploadFormato(file){
    const actualD = new Date().getTime();
    const fPath = '/formatos/'+actualD+file["name"];
    console.log("fpfile",fPath)
    this.downloadUrl$ = from(this.afStorage.upload(fPath, file)).pipe(
      switchMap((_)=>this.afStorage.ref(fPath).getDownloadURL())
    );
  }

  getFormatosCollections(){
    return this.afStore.collection("formatos");
  }

  addFormato(data){    
    const timestamp = new Date().getTime();
    console.log("time:",this.downloadUrl$);
    this.downloadUrl$.subscribe(b => {     
      return this.getFormatosCollections().add({
        nombre : data["nombreFormato"],
        fechaVigencia : timestamp,
        rutaFormato: b,
        fechaCreacion : timestamp
      })
    });    
  }

  getTodosFormatos(){
    return this.getFormatosCollections()
      .snapshotChanges()
      .pipe(
        map(spsh=>
          spsh.map(b=>{
            const data = b.payload.doc.data() as Formatos
            const idf = b.payload.doc.id;
            return {idf, ...data}
          })
        ), catchError(e => throwError(e))
      );
  }
}
