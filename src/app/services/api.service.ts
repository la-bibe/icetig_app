import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as crypto from 'crypto-js';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';

@Injectable()
export class ApiService {
    apiUrl: string;
    apiUserPath = '/user';

    constructor(private http: HttpClient, private router: Router) {
        this.apiUrl = environment.apiUrl;
    }

    static getHeaders(method, path, data) {
        const algo = 'sha512';

        if (data) {
            data = crypto.MD5(JSON.stringify(data));
        }

        const hash = crypto.HmacSHA512(`${method.toUpperCase()}${path}${data}${Math.floor(Date.now() / 1000)}`,
            JSON.parse(window.localStorage.getItem('session')).signatureToken);

        return new HttpHeaders().set('Authorization', `HMAC algo=${algo},time=${Math.floor(Date.now() / 1000)},hash=${hash}`);
    }


    apiGet(path) {
        const headers = ApiService.getHeaders('GET', path, ``);

        return this.http.get(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
    }

    apiDelete(path, body) {
        const headers = ApiService.getHeaders('DELETE', path, body);

        return this.http.delete(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
    }

    getUserPath(user: number) {
        return `${this.apiUserPath}/${user}`;
    }

    getPermissions(user: number) {
        return this.apiGet(`${this.getUserPath(user)}/permissions`);
    }

    getGroups(user: number) {
        return this.apiGet(`${this.getUserPath(user)}/groups`);
    }

    getSanctions(user: number) {
        return this.apiGet(`${this.getUserPath(user)}/sanctions`);
    }
}
