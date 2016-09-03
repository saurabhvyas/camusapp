import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

declare var firebase: any;


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


/* this.myfirebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // If there's a user take him to the home page.
    console.log('used is logged in ')
  } else {
    // If there's no user logged in send him to the LoginPage
    
    console.log('user isnt logged in');

  }
});


  }


  


 currentUser() {
        return this.myfirebase.auth().currentUser
    }

    logout() {
        return this.myfirebase.auth().signOut()
    }



 uploadPhotoFromFile(imageData, progress) {


        
            var _time = new Date().getTime()
            var fileRef = this.myfirebase.storage().ref('img' + _time + '.jpg')
            var uploadTask = fileRef.put(imageData['blob']);

            uploadTask.on('state_changed', function (snapshot) {
                console.log('state_changed', snapshot);
                progress && progress(snapshot)
            }, function (error) {
                console.log(JSON.stringify(error));
              
            }, function () {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                var downloadURL = uploadTask.snapshot.downloadURL;

                // Metadata now contains the metadata for file
                fileRef.getMetadata().then(function (_metadata) {

                    // save a reference to the image for listing purposes
                    var ref = this.myfirebase.database().ref('images');
                    ref.push({
                        'imageURL': downloadURL,
                        'thumb' : imageData['thumb'],
                        'owner': this.myfirebase.auth().currentUser.uid,
                        'when': new Date().getTime(),
                        //'meta': _metadata
                    });
                   
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                 console.log(error);

                });

            });
    */ 
 }


}

