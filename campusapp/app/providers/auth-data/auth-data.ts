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

   uploadPhotoFromFile(imageData, progress) {


        
            var _time = new Date().getTime()
            var fileRef = firebase.storage().ref('img' + _time + '.jpg')
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
                    var ref = firebase.database().ref('images');
                    ref.push({
                        'imageURL': downloadURL,
                        'thumb' : imageData['thumb'],
                        'owner': firebase.auth().currentUser.uid,
                        'when': new Date().getTime(),
                        //'meta': _metadata
                    });
                   
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                 console.log(error);

                });

            });
     
 }
 

  logoutUser(): any {
  return this.fireAuth.signOut();
}

}