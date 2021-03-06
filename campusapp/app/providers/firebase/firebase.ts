import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

//declare var firebase: any;

import * as firebase from 'firebase';

/*
  Generated class for the Firebase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Firebase {




myfirebase:any;




  constructor(private http: Http) {



    var config = {
    apiKey: "AIzaSyDghKMAJMm5DB5OOB9ws2ZZ-eM2xKS8GCQ",
    authDomain: "elearning-a3ed2.firebaseapp.com",
    databaseURL: "https://elearning-a3ed2.firebaseio.com",
    storageBucket: "elearning-a3ed2.appspot.com",
  };



this.myfirebase=firebase.initializeApp(config);

console.log('app is initialized');


 this.myfirebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // If there's a user take him to the home page.
    console.log('used is logged in ')
  } else {
    // If there's no user logged in send him to the LoginPage
    
    console.log('user isnt logged in');

  }
});


  }

 loginUser(email: string, password: string): any {
    return this.myfirebase.auth().signInWithEmailAndPassword(email, password);


  }
  
getposts(){

    return this.myfirebase.database().ref('images/');

}

getdata(location:string){

    return this.myfirebase.database().ref(location + "/")
}

createUser(username:any,password:any) {

    return this.myfirebase.auth().createUserWithEmailAndPassword(username,password)
}
 currentUser() {
        return this.myfirebase.auth().currentUser
    }

    logout() {
        return this.myfirebase.auth().signOut()
    }



 uploadPhotoFromFile(imageData:any) {
 

 console.log('initiated image upload');
 

        
            var _time = new Date().getTime()
            var fileRef = this.myfirebase.storage().ref('img' + _time + '.png')
            
           let   uploadTask = fileRef.putString(imageData ,'base64',{contentType: 'image/png'});
               
               return uploadTask

 }
           


}

