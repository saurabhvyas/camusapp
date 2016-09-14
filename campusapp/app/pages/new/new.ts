import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(private navCtrl: NavController,private firebase:Firebase) {

  
 

  }


takepic(){



console.log('taking pic');

  Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.PNG,
      targetWidth: 640,
      correctOrientation: true
}).then((imageData) => {

// imageData = "filesystem:" + imageData ; 



// console.log(imageData);



  
  
  

  


 

 
 
  



   this.firebase.uploadPhotoFromFile(imageData);


 

 



})
 

}

/*


 start() {
     var newFile = new MediaPlugin('Music/audiofile.wav');
newFile.startRecord();



 }
  
  */
  
  
 


}