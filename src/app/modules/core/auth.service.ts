import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	private afAuth: AngularFireAuth,
    private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/profile');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  loginF({email,password}){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

}
