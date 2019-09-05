import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Product } from '../../model/product.model';

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
  product: Product = {id: null, name: null};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpServiceProvider) {

    this.id = this.navParams.get('productId');
  }

  ngOnInit() {
    this.httpService.getById(`products/${this.id}`).subscribe(data => this.product = data);
  }

  updateProduct() {
    this.httpService.put(`products/${this.id}`, this.product).subscribe(data=> console.log(data));
  }

  

}
