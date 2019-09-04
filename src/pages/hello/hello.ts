import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the HelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage implements OnInit{

  id;
  product = {
    'id':'','name': ''
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpServiceProvider) {

    this.id = this.navParams.get('productId');
  }
  ngOnInit() {
    this.httpService.get(`products/${this.id}`).subscribe(data => this.product = data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
  }

}
