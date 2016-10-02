import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import { Camera,File } from 'ionic-native';
import {AuthData} from '../../providers/auth-data/auth-data';
import {Firebase} from '../../providers/firebase/firebase';
declare var window: any

/*
  Generated class for the NewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/new/new.html',
  
})
export class NewPage {

  title:string="";
  description:string="";
  imgdata:any;

upload_img() {

  

   this.firebase.uploadPhotoFromFile(this.imgdata).then((snapshot)=>{
    
                console.log('image upload success');
                
                var downloadURL = snapshot.downloadURL;

                console.log(` ${this.firebase.currentUser().photoURL} , ${this.firebase.currentUser().displayName}`);
                

                this.firebase.getdata('images').push({

                  'imageURL': downloadURL,
                        'title':this.title,
                        'description':this.description,
                        'owner_img':this.firebase.currentUser().photoURL,
                        'owner': this.firebase.currentUser().uid,
                        'owner_name':this.firebase.currentUser().displayName,
                        'when': new Date().getTime(),

                }).then(()=>{

                  console.log('data node created for newly uploaded image');
                  

                },(err)=>{

                  console.log(err.code);

                })


                // Metadata now contains the metadata for file
              /*  

                    // save a reference to the image for listing purposes
                    var ref = this.myfirebase.database().ref('images');
                    ref.push({
                        
                        
                    });
                   
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                 console.log(error);

                });

            

            */
     
 

   },(err)=>{
     console.log(err);

   })


}



  constructor(private navCtrl: NavController,private loadCtrl:LoadingController,  private firebase:Firebase) {

  
 

  }


takepic(){


console.log(` title is ${this.title} & description is ${this.description}`);

console.log('taking pic');

  Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.PNG,
      targetWidth: 640,
      correctOrientation: true
}).then((imageData) => {

// imageData = "filesystem:" + imageData ; 

this.imgdata=imageData;



// console.log(imageData);



  




})
 

}

/*


 start() {
     var newFile = new MediaPlugin('Music/audiofile.wav');
newFile.startRecord();



 }
  
  */
  
  
 


}