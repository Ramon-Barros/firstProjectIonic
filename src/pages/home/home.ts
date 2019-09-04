import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloPage } from '../hello/hello';
import { AboutPage } from '../about/about';

import { HttpServiceProvider } from '../../providers/http-service/http-service';

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

    this.httpService.get('products').subscribe(data=> this.products = data);
  }

  goToPage() {

    this.navCtrl.push(HelloPage);
  }

  goToAboutPage() {

    this.navCtrl.push(AboutPage);
  }

}
