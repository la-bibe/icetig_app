import {Component, OnInit} from '@angular/core';
import {flyInOut, scaleInOut, slideInOutAnimation} from './login.animation';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [slideInOutAnimation, scaleInOut, flyInOut],
	host: {'[@slideInOutAnimation]': ''}
})
export class LoginComponent implements OnInit {
	login: string;
	pass: string;
	cpass: string;
	remember: boolean;
	formType: string = 'login';

	badCredentials = false;

	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
	}

	ngOnInit() {
	}

	onSubmit() {

		let credentials = `${this.login}:${this.pass}`;
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
