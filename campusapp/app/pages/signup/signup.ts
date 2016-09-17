import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Firebase} from '../../providers/firebase/firebase';
import { Camera,File } from 'ionic-native';

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
  thumb_base64:any;



  constructor(private navCtrl: NavController,private firebase:Firebase) {
   
  }

  takethumb() {
   
   console.log('taking pic');

  Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: Camera.EncodingType.PNG,
      targetWidth: 64,
      correctOrientation: true
}).then((imageData) => {

this.thumb_base64=imageData;



},(err)=>{
  console.log(err);

});

  }

  SignUpUser() {

    console.log(` username : ${this.username} 
    
    email : ${this.email}

    password : ${this.password}

    `);

     
     this.firebase.createUser(this.email,this.password).then((user)=>{
  
  // make this function return a promise
 // this.firebase.uploadPhotoFromFile(this.thumb_base64,"user thumb","thumnail of user during signup");


        
      // create a ref to user and add email as well as his username 
      
      this.firebase.getdata('UserProfile/ ' + user.uid).update({username:this.username,photoURL:"test_url"}).then(()=>{


         console.log('user profile update success');
         
           
      },(err)=>{
            
            console.log(err.code);


      });


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
