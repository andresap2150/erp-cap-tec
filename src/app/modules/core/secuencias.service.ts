import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecuenciasService {

  public actualSecuence;
  private valActual;
  private idActual;

  constructor(private afStore: AngularFirestore) { }

  public getASecuencia(type){
    return this.afStore.collection("secuencias", ref=> ref.where("nombre","==",type))
    .snapshotChanges()
    .pipe(
      tap(spsh => spsh.every(a => {
        this.idActual = a.payload.doc.id;
        console.log("valor sec",a.payload.doc)
        const secuencia:any = a.payload.doc.data();
        this.valActual = secuencia["valor"];
        this.actualSecuence = secuencia["valor"] < 10 ? type + "0"+ secuencia["valor"]:type + secuencia["valor"];
      }))
    )
  }

  public increaseSecuencia(type){
    this.valActual++; 
    this.afStore.collection("secuencias").doc(this.idActual).update({"valor": this.valActual});
  }

}
