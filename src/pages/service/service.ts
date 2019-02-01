import { Component } from '@angular/core';
import { AlertController, IonicPage, Loading, LoadingController, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RestProvider } from  './../../providers/rest/rest';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { FormPage } from '../../pages/form/form';
@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
  providers: [ RestProvider ]
})


export class ServicePage {
  public postList: any;
  public people: any;
  constructor(public nav: NavController , private auth: AuthService, private alertCtrl: AlertController
    , public formBuilder: FormBuilder , public  restProvider: RestProvider , public modalCtrl: ModalController
   ) {
     debugger;
    this.loadPeople();
    //this.getPosts();
   }

   loadPeople(){
     debugger;
    this.restProvider.load()
    .then(data => {
      debugger;
      this.people = data;
    });
  }

//   getPosts(){
//     this.restProvider.getPost().subscribe((data) => {
//         this.postList = data;
//     });
// }


   public create() {
     debugger;
    this.nav.push('FormPage');
  }


  openModal(characterNum) {

    let modal = this.modalCtrl.create(FormPage , characterNum);
    modal.present();
  }

}
