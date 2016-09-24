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

  constructor(private navCtrl: NavController,private firebase:Firebase) {

/* if (this.firebase.currentUser() == null) {
this.navCtrl.push(LoginPage);

  
 }

*/

    this.firebase.getposts().on('value',(snapshot)=>{

    console.log(snapshot.val());

snapshot.forEach((child)=>{

let date = new Date(child.val().when);

// console.log(date.toISOString().substring(0,10));


this.posts.push({
  
  imageURL:child.val().imageURL,
  when:date.toISOString().substring(0,10),
  owner_name:child.val().owner_name,
  owner_img:child.val().owner_img,
  description:child.val().description,
  title:child.val().title,
  

});


});

  // this.posts=Array.from(snapshot.val());
  
  console.log(this.posts);

   


  });


    

  }

}
