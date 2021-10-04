import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router) {}

  //TODO: Eliminar con refactor
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.router.navigateByUrl('/profile');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('error al crear usuario: ', error);
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  loginF({email,password}){
    return this.afAuth.signInWithEmailAndPassword(email, password).then(value => {
      this.router.navigateByUrl('/home');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  signUpF({email,password}){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(user =>{ 
      this.afStore.collection("perfilUsuario")
      .add({userUid:user?.user?.uid, 
            rol:"4"})
    })
    .then(value => {
     this.router.navigateByUrl('/home');
    })
    .catch(error => {
      console.log('error al crear usuario: ', error);
    });
  }

}
