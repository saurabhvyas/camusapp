import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Firebase} from '../../providers/firebase/firebase';
import { LoginPage } from '../login/login';

/*
  Generated class for the FeedPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/feed/feed.html',
})
export class FeedPage {

posts:any[]=[];

  constructor(public navCtrl: NavController,private firebase:Firebase) {

 if (this.firebase.currentUser() == null) {
this.navCtrl.push(LoginPage);

  
 }


    this.firebase.getposts().on('value',(snapshot)=>{

    console.log(snapshot.val());

snapshot.forEach((child)=>{

this.posts.push(child.val());


});

  // this.posts=Array.from(snapshot.val());
  
  console.log(this.posts);

   


  });


    

  }

}
