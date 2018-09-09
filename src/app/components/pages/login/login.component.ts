import {Component, OnInit} from '@angular/core';
import {flyInOut, scaleInOut, slideInOutAnimation, slideInTop, translateTop} from './login.animation';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [slideInOutAnimation, scaleInOut, flyInOut, slideInTop, translateTop],
	host: {'[@slideInOutAnimation]': ''}
})
export class LoginComponent implements OnInit {
	firstName: string;
	lastName: string;
	eMail: string;
	password: string;
	confirmPassword: string;
	remember: boolean;

	formType: string = 'register';

	badCredentials = false;

	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
	}

	ngOnInit() {
	}

	onSubmit() {

		let credentials = `${this.eMail}:${this.password}`;
		let remember = `?stay_connected=${(!this.remember) ? 1 : 0}`;

		this.http.get(environment.apiUrl + '/security/access' + remember, {
			headers: new HttpHeaders().set('Authorization', `Basic ${btoa(credentials)}`), withCredentials: true
		}).toPromise()
			.then(result => {
				window.localStorage.setItem('session', JSON.stringify((result as ILoginResponse).data));
				this.router.navigateByUrl('');
			})
			.catch(error => {
				this.badCredentials = true;
				setTimeout(() => {
					this.badCredentials = false
				}, 3000);
			})
	}

	toggleRegister() {

		this.formType =
			(this.isLogin())
				? 'register'
				: 'login';
	}

	isRegister() {

		return this.formType == 'register';
	}

	isLogin() {

		return this.formType == 'login';
	}
}

export interface ILoginResponse {
	data: {
		expirationDate: Date;
		signatureToken: string;
	}
}
