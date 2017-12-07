import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as crypto from "crypto-js"
import {environment} from "../../environments/environment.prod";
import {Router} from "@angular/router";

@Injectable()
export class ApiService {
  apiUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
  }

  static getHeaders(method, path, data) {


    const algo = 'sha512';

    if (data)
      data = crypto.MD5(JSON.stringify(data));

    const hash = crypto.HmacSHA512(`${method.toUpperCase()}${path}${data}${Math.floor(Date.now() / 1000)}`, window.localStorage.getItem('token'));
    console.log(`${method.toUpperCase()}${path}${data}${Math.floor(Date.now() / 1000)}`, window.localStorage.getItem('token'));
    console.log(hash);
    console.log(`HMAC algo=${algo},time=${Math.floor(Date.now() / 1000)},hash=${hash}`);
    return new HttpHeaders().set('Authorization', `HMAC algo=${algo},time=${Math.floor(Date.now() / 1000)},hash=${hash}`);
  }


  apiGet(path) {
    const headers = ApiService.getHeaders('GET', path, ``);

    this.http.get(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true});
  }

  apiDelete(path, body) {
    const headers = ApiService.getHeaders('DELETE', path, body);

    return this.http.delete(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true});
  }
}
