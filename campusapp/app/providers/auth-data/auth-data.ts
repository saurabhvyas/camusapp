import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AuthData {

   public fireAuth: any;
  public userProfile: any;


  constructor() {


    this.fireAuth = firebase.auth();
  this.userProfile = firebase.database().ref('/userProfile')

  }

   loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
      this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) => {
        this.userProfile.child(authenticatedUser.uid).set({
          email: email
        });
      });
    });
  }

  logoutUser(): any {
  return this.fireAuth.signOut();
}

}