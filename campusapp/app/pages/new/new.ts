import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import { Camera } from 'ionic-native';
/*
  Generated class for the NewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/new/new.html',
})
export class NewPage {

takepic(){

console.log('taking pic');

 Camera.getPicture({}).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;


}, (err) => {

  console.log(err);

 // Handle error
});


}

 start() {
     var newFile = new MediaPlugin('Music/audiofile.wav');
newFile.startRecord();


 }
  constructor(private navCtrl: NavController) {

  


  }

}
