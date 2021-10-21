import { Injectable } from '@angular/core';
import { AngularFireStorage  } from '@angular/fire/compat/storage';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  downloadUrl$ : Observable<string> 

  constructor(private afStorage: AngularFireStorage) { }

  uploadContract(file){
    const actualD = new Date().getTime();
    console.log("file",file)
    const fPath = '/contratos/'+actualD+file["name"];
    console.log("fpfile",fPath)
    this.downloadUrl$ = from(this.afStorage.upload(fPath, file)).pipe(
      switchMap((_)=>this.afStorage.ref(fPath).getDownloadURL())
    );
  }
}
