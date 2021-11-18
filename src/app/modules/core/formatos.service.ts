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

  async subirFormato(nombre: string, imgBase64: any) {

    try {
      let respuesta = await this.afStorage.ref("formatos/" + nombre).putString(imgBase64, 'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }

  }
}
