import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as crypto from "crypto-js"

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  static getHeaders(method, path, data) {
    const algo = 'sha512';
    const hash = crypto.HmacSHA512('sha512', 'foo-bar-123');
//.AES.encrypt(`${method.upper}${path}${Md5.hashStr(data)}${Date.now()}`, 'foo-bar-123');
    console.log(hash);
    console.log(`HMAC algo=${algo},hash=${hash},time=${Date.now()}`);
    return `HMAC algo=${algo},hash=${hash},time=${Date.now()}`
  }


  get(path) {
    console.log(ApiService.getHeaders('POST', 'data', `{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","ID":"SGML",}}}}`));
  }

}
