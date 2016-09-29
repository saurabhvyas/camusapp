import { Component } from '@angular/core';
import { NavController,LoadingController, AlertController ,NavParams,ViewController} from 'ionic-angular';
import { AuthData } from '../../providers/auth-data/auth-data';
import { FormBuilder, Validators, ControlGroup } from '@angular/common';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import {Firebase} from '../../providers/firebase/firebase';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers:[]
})
export class LoginPage {

  public loginForm: any;
   submitAttempt: boolean = false;
   email:any="";
   password:any="";

  user_id:any="";
 




  constructor(private nav: NavController,public formBuilder: FormBuilder,
  public alertCtrl: AlertController,public loadingCtrl: LoadingController,
  private firebase:Firebase,private viewCtrl:ViewController,public toastCtrl: ToastController) {
  
  
  this.firebase.myfirebase.auth().onAuthStateChanged((user)=> {
  if (user) {
    // User is signed in.


  this.nav.push(HomePage,{
    id:this.firebase.currentUser().uid,
    username:this.firebase.currentUser().displayName
  });

   




  } 

  else {


  }

  });

  }



 
 loginUser(){

console.log(` email is ${this.email} and password is ${this.password}`);

   // this.submitAttempt = true;
 
  

      this.firebase.loginUser(this.email, this.password).then( authData => {
     


        let loading = this.loadingCtrl.create({
       // dismissOnPageChange: true,
      });
      loading.present();


   this.nav.setRoot(HomePage).then(()=>{
          
          loading.dismiss();
          
          

        });
        
      }, error => {
        
      
   
        
        
         let toast = this.toastCtrl.create({
      message: error.message,
      duration: 3000
    });

    toast.present();
        
      
        
     
      });
      
     
         
        
     
        
    
  }


  goToSignup(){
  this.nav.push(SignupPage);
}

goToResetPassword(){
 // this.nav.push(ResetPasswordPage);
}
 
}

  