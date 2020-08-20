import { Injectable, resolveForwardRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  user$ = this.afAuth.authState.pipe(
    switchMap(user => {
      if(user){
        return this.afs.doc<any>(`user-details/${user.uid}`).valueChanges();
      }else{
        return null;
      }
    })
  )

  signUp(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
      .then(data => {
        return this.afs.collection('user-details').doc(data.user.uid).set({
          firstName: value.firstName,
          middleName: value.middleName,
          lastName: value.lastName,
          age: value.age,
          address: value.address,
          occupation: value.occupation
        }).then(() => {
          this.router.navigate(['/dashboard']);
        });
      }, err => reject(err))
    })
  }

  signIn(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
      .then(data => {
        this.router.navigate(['/dashboard']);
        resolve(data);
      }, err => reject(err))
    })
  }

  signOut(){
    return new Promise<any>((resolve, reject) => {
      if(this.afAuth.currentUser){
        this.afAuth.signOut().then(data => {
          this.router.navigate['/home'];
          resolve(data);
        });
      }else {
        reject();
      }
    })
  }

  userState(){
    return new Promise<any>((resolve, reject) => {
      var user = this.afAuth.onAuthStateChanged(user => {
        if(user){
          resolve(user);
        } else{
          reject('No user logged in');
        }
      })
    })
  }
}
