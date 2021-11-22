import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Subject} from 'rxjs';
import { catchError, tap, map } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user$ = new Subject<User>();
  public aux;

  constructor(
  	private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router, 
    private toastr: ToastrService) {}

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  loginF({email,password}){
    this.handleErrorOrSuccess(() => {
      return this.afAuth.signInWithEmailAndPassword(email, password)
    });
  }

  signUpF({email,password}){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(user =>{ 
      this.afStore.collection("perfilUsuario")
      .add({userUid:user?.user?.uid, 
            nombreRol: "tecnico",
            rol:"2"})
    })
    .then(value => {
     this.router.navigateByUrl('/home');
    })
    .catch(error => {
      //console.log('error al crear usuario: ', error);
      this.toastr.success('Error al crear usuario!', 'Revisa las credenciales!');
    });
  }

  private handleErrorOrSuccess(
    cb: ()=> Promise<firebase.default.auth.UserCredential>
  ){
    cb()
      .then(data => this.authenticateUser(data)).then(a => this.router.navigateByUrl('/home'))
      //.catch(e =>  console.log('Algo salió mal: ', e.message));
      .catch(e =>  this.toastr.success('Algo salió mal!', 'Revisa las credenciales!'));
  }

  private authenticateUser(userCredential){
    const {user: {email, uid}} = userCredential;

    this.afStore.collection("perfilUsuario", ref => ref.where("userUid","==",uid))
      .valueChanges()
      .subscribe(res=> {
        this.aux = res[0];
        const rol = this.aux["rol"];
        this.user$.next({email, uid, rol});
      })    
  }
}

export interface User {
  uid: string;
  email: string;
  rol: string;
}
