import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecuenciasService {

  public actualSecuence;
  private valActual;
  private idActual;
  private alreadySaved = false;
  private reintentos = 3;

  constructor(private afStore: AngularFirestore) { }

  public getASecuencia(type){
    this.alreadySaved = false;
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
    if(!this.alreadySaved){
      this.valActual++; 
      this.afStore.collection("secuencias").doc(this.idActual).update({"valor": this.valActual});
      this.alreadySaved = true;
      this.reintentos = 3
    }else if(this.reintentos>0){
      this.reintentos--;
      setTimeout(()=>this.increaseSecuencia(type), 150)
    }
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
      const nuevoValor = res.valor++;
      this.afStore.collection("secuencias").doc(res.id).update({"valor": nuevoValor});
    })
  }
}
