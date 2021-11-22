import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatenteService {

  constructor(private firestore: AngularFirestore) { }

  agregarPatente(patente: any): Promise<any> {
    return this.firestore.collection('patentes').add(patente);
  }

  getPatentes(): Observable<any> {
    return this.firestore.collection('patentes', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarPatente(id: string): Promise<any> {
    return this.firestore.collection('patentes').doc(id).delete();
  }

  getPatente(id: string): Observable<any> {
    return this.firestore.collection('patentes').doc(id).snapshotChanges();
  }

  actualizarPatente(id: string, data:any): Promise<any> {
    return this.firestore.collection('patentes').doc(id).update(data);
  }
}
