import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as crypto from 'crypto-js';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';

@Injectable()
export class ApiService {
	apiUrl: string;
	apiUserPath = '/user';
	apiSanctionPath = '/sanction';
	apiAccessPath = '/security/access';

	constructor(private http: HttpClient, private router: Router) {
		this.apiUrl = environment.apiUrl;
	}

	static getHmacHeader(method, path, data) {
		const algo = 'sha512';

		if (data) {
			data = crypto.MD5(JSON.stringify(data));
		}

		const hash = crypto.HmacSHA512(`${method.toUpperCase()}${path}${data}${Math.floor(Date.now() / 1000)}`,
			JSON.parse(window.localStorage.getItem('session')).signatureToken);

		return new HttpHeaders().set('Authorization', `HMAC algo=${algo},time=${Math.floor(Date.now() / 1000)},hash=${hash}`);
	}

	static getBasicHeader(credentials) {

		return new HttpHeaders().set('Authorization', `Basic ${btoa(credentials)}`);
	}

	apiGet(path, headers = ApiService.getHmacHeader('GET', path, ``)) {

		return this.http.get(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
	}

	apiPost(path, body, headers = ApiService.getHmacHeader('POST', path, body)) {

		return this.http.get(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
	}

	apiDelete(path, body, headers = ApiService.getHmacHeader('DELETE', path, body)) {

		return this.http.delete(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
	}

	userPost(body, credentials) {

		return this.apiPost(this.apiUserPath, body, ApiService.getBasicHeader(credentials));
	}

	accessGet(credentials, remember: boolean) {

		const stayConnected = `?stay_connected=${(remember) ? 1 : 0}`;

		return this.apiGet(this.apiAccessPath + stayConnected, ApiService.getBasicHeader(credentials))
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

	getSanctions(user: number = -1) {
		if (user == -1) {
			return this.apiGet(`${this.apiSanctionPath}`);
		} else {
			return this.apiGet(`${this.getUserPath(user)}/sanctions`);
		}
	}
}
