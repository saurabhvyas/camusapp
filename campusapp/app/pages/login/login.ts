import { Component } from '@angular/core';
import { NavController,LoadingController, AlertController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data/auth-data';
import { FormBuilder, Validators, ControlGroup } from '@angular/common';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

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




  constructor(private nav: NavController,public formBuilder: FormBuilder,
  public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
  
  
  

  }



 
/* loginUser(){

console.log(` email is ${this.email} and password is ${this.password}`);

   // this.submitAttempt = true;

  
      this.authData.loginUser(this.email, this.password).then( authData => {
        this.nav.setRoot(HomePage);
      }, error => {
        
        console.log(`${error.message}`);
        
        /* let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
     
      });
      let loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      loading.present();
    
  }


  goToSignup(){
  this.nav.push(SignupPage);
}

goToResetPassword(){
 // this.nav.push(ResetPasswordPage);
}
 */
}

  