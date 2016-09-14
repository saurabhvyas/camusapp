import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Firebase} from '../../providers/firebase/firebase';

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
