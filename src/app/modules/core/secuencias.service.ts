import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, tap } from 'rxjs/operators';

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

  public getAsecuence(type){
    return this.afStore.collection("secuencias", ref=> ref.where("nombre","==",type))
    .snapshotChanges()
    .pipe(
      map(spsh => {
        const secuence = spsh[0];
        console.log("actual",secuence)
        const sec : any = secuence.payload.doc.data();
        return type + sec["valor"];
      })
    )
  }

  public increaseSecuence(type){
    this.afStore.collection("secuencias", ref=> ref.where("nombre","==",type))
    .snapshotChanges()
    .pipe(
      map(spsh => {
        const secuence = spsh[0];
        const data:any = secuence.payload.doc.data();
        const respon = {id: secuence.payload.doc.id, valor: data["valor"]}
        return respon ;
      })
    ).subscribe(res => {
      console.log("adentro del increase", res)
      const nuevoValor = res.valor++;
      this.afStore.collection("secuencias").doc(res.id).update({"valor": nuevoValor});
    })
  }
}
