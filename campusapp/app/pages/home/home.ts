import {Component} from '@angular/core';
import {NavController,PopoverController} from 'ionic-angular';

import { AuthData } from '../../providers/auth-data/auth-data';
import { LoginPage } from '../login/login';
import { PopoverPage } from '../popover/popover';
import { FeedPage } from '../feed/feed';
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers:[AuthData]
})
export class HomePage {

  username:string = "Saurabh Vyas";
  bio:string="Open Source Enthusiast and UI/UX Designer , Also has great interest in Education"
  constructor(public nav: NavController,public authData:AuthData,private popover:PopoverController) {

  }
  
  gotofeed(){

    this.nav.push(FeedPage);

  }
  presentpopover(myEvent) {
    console.log('test');
  

 var mypopover=this.popover.create(PopoverPage);

 
 mypopover.present({
   ev:myEvent
 });



  }
  logOut() {
  this.authData.logoutUser().then(() => {
    this.nav.setRoot(LoginPage);
  });
}
}
