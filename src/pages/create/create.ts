import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product.model';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ToastProvider } from '../../providers/toast/toast';

import { HomePage } from '../home/home';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  product: Product = {
    name: null
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpService: HttpServiceProvider,
    private toastService: ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createProduct() {
    this.httpService.post('products',this.product)
                    .subscribe(res => {
                      this.toastService.createToast('Produto criado com sucesso!'),
                      this.navCtrl.setRoot(HomePage);
                    });
  }

}
