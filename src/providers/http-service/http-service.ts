import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  API_URL = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    
  }

  get (endpoint: string) {
      /*colocando o observable para fazer as requisições*/
    return this.http.get<Observable<any>>(`${this.API_URL}/${endpoint}`);
  }

  post (endpoint: string, data: Object) {

    return this.http.post(`${this.API_URL}/${endpoint}`, data);
  }

}
