import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloPage } from '../hello/hello';
import { AboutPage } from '../about/about';

import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { CreatePage } from '../create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  products;

  constructor(
    public navCtrl: NavController,
    public httpService: HttpServiceProvider
  
  ) {

  }

  ngOnInit() {

    this.products = this.httpService.get('products');
  }

  goToPage() {

    this.navCtrl.push(HelloPage);
  }

  goToAboutPage() {

    this.navCtrl.push(AboutPage);
  }

  goToSingle(productId) {
    this.navCtrl.push(HelloPage, {
      'productId': productId
    });
  }

  goToCreatePage() {
    this.navCtrl.push(CreatePage);
  }

}
