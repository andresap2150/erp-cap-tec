import { ContentObserver } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage  } from '@angular/fire/compat/storage';
import { from, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  downloadUrl$ : Observable<string> 
  actualLocation : string

  constructor(private afStorage: AngularFireStorage, private afStore: AngularFirestore) { }

  uploadContract(file){
    console.log("se va a cargar");
    const actualD = new Date().getTime();
    console.log("file",file)
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
      //this.setLocation(a);      
      console.log("suscribe:",a);
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

  private setLocation(a){
    this.actualLocation = a;
  }
}
