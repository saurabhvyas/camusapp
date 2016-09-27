import {Component,AfterViewInit} from '@angular/core';
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
export class HomePage implements AfterViewInit{

  username:string = "Saurabh Vyas";
  bio:string="Open Source Enthusiast and UI/UX Designer , Also has great interest in Education";
  editmode:boolean=false;
  first_signin_trigger:boolean=false;



ngAfterViewInit() {

// let user = this.firebase.currentUser();





}
  user_id:any;

  constructor(public nav: NavController,private firebase:Firebase,public popover:PopoverController,private params:NavParams) {
  
  console.log('home constructor called');

  this.user_id=this.params.get('id');
 this.username=this.params.get('username');

 
this.firebase.myfirebase.auth().onAuthStateChanged((user)=> {
  if (user) {
    // User is signed in.

     this.user_id=user.uid;
     this.username=user.displayName;
     this.first_signin_trigger=true;


console.log(this.username);



  } else {
    // No user is signed in.
this.user_id=null;
this.username="";

  if(this.first_signin_trigger===true) {

    this.nav.push(LoginPage);

  }
  
  }
});




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


 

 //console.log(this.username);
 //console.log(this.user_id);




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

  if(this.user_id!==null) {


this.firebase.logout().then(()=>{
  
  console.log('redirecting to login page');
  
  this.nav.push(LoginPage).catch((reason)=>{
    console.log(reason);

  })



 });

  
} 

else {

    this.nav.push(LoginPage).catch((reason)=>{
    console.log(reason);

  })
}
  

  }
 
}
