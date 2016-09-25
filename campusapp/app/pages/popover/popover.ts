import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

/*
  Generated class for the PopoverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/popover/popover.html',
})
export class PopoverPage {

  constructor(private navCtrl: NavController,private viewCtrl: ViewController) {

  }

   close() {
      this.viewCtrl.dismiss();
    }

}
