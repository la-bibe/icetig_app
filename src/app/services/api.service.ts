import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as crypto from "crypto-js"

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  static getHeaders(method, path, data) {
    const algo = 'sha512';
    const hash = crypto.HmacSHA512(`${method.toUpperCase()}${path}${crypto.MD5(data)}${Date.now()}`, 'foo-bar-123');
    return `HMAC algo=${algo},hash=${hash},time=${Date.now()}`
  }


  get(path) {
    console.log(ApiService.getHeaders('POST', '/data', `{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","ID":"SGML",}}}}`));
  }

}
