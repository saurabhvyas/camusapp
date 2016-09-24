import {Component} from '@angular/core';
import {NavController,PopoverController,NavParams} from 'ionic-angular';

import { AuthData } from '../../providers/auth-data/auth-data';
import { Firebase } from '../../providers/firebase/firebase';
import { LoginPage } from '../login/login';
import { PopoverPage } from '../popover/popover';
import { FeedPage } from '../feed/feed';
import { NewPage } from '../new/new';
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers:[]
})
export class HomePage {

  username:string = "Saurabh Vyas";
  bio:string="Open Source Enthusiast and UI/UX Designer , Also has great interest in Education";

  user_id:any="";

  constructor(public nav: NavController,private firebase:Firebase,private popover:PopoverController,private params:NavParams) {
  

  // this code breaks navcontroller 
  
 /*  if (this.firebase.currentUser() == null ) {

   console.log('redirecting to login page');
  
  this.nav.push(LoginPage);

  }
  else {

    console.log(`current user is ${this.firebase.currentUser()}`);

  }
  
  */

  }

  ionViewDidEnter() {

    console.log('view entered ');
 this.user_id=this.params.get('id');
 this.username=this.params.get('username');


}

  gotonewpage()
{
  this.nav.push(NewPage);
  
}  
  gotofeed(){

    this.nav.push(FeedPage);

  }
  presentpopover(myEvent) {
    console.log('test');
  

 let mypopover=this.popover.create(PopoverPage);

 
 mypopover.present({
   ev:myEvent
 });



  }
  logOut() {
 this.firebase.logout().then(()=>{
  
  console.log('redirecting to login page');
  
  this.nav.push(LoginPage);



 });

  
}
}
