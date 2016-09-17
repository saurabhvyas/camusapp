import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Firebase} from '../../providers/firebase/firebase';

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {

  username:any;
  email:any;
  password:any;


  constructor(private navCtrl: NavController,private firebase:Firebase) {
   
  }

  SignUpUser() {

    console.log(` username : ${this.username} 
    
    email : ${this.email}

    password : ${this.password}

    `);

     
     this.firebase.createUser(this.email,this.password).then(()=>{

       console.log('signup success');



     },(err)=>{

       if(err.code === "auth/email-already-in-use") {
      
      console.log('email already in use ');
       
       }

       else if(err.code === "auth/weak-password") {
 console.log('weak password  ');
           
       }


       else if (err.code === "auth/invalid-email") {

         console.log('invalid email');

       }



     });



    
  }

}
