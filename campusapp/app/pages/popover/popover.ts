import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { Firebase } from '../../providers/firebase/firebase';
import { LoginPage } from '../login/login';

/*
  Generated class for the PopoverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/popover/popover.html',
})
export class PopoverPage {

  constructor(private navCtrl: NavController,private viewCtrl: ViewController,private firebase:Firebase) {

  }

   close() {
     // this.viewCtrl.dismiss();

if(this.firebase.currentUser !==null) {


this.firebase.logout().then(()=>{
  
  console.log('redirecting to login page');
  
  this.navCtrl.push(LoginPage).catch((reason)=>{
    console.log(reason);

  })



 });


    }
   }

}
