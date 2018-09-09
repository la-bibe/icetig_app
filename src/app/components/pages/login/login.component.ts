import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {ApiService} from "../../../services/api.service";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	firstName: string;
	lastName: string;
	eMail: string;
	password: string;
	confirmPassword: string;
	remember: boolean;

	formType: string = 'login';

	badCredentials = false;

	constructor(private http: HttpClient, private authService: AuthService, private router: Router, private apiService: ApiService) {
	}

	ngOnInit() {
	}

	onSubmit() {

		let credentials = `${this.eMail}:${this.password}`;

		if (this.isLogin()) {

			this.logIn(credentials)

		} else {

			this.signIn(credentials);
		}
	}

	signIn(credentials) {

		this.apiService.userPost({
			email: this.eMail,
			passWord: this.password,
			firstName: this.firstName,
			lastName: this.lastName
		}, credentials)
			.then(result => {

				this.logIn(credentials);

			})
			.catch(error => {

			})
	}

	logIn(credentials) {

		this.apiService.accessGet(credentials, !this.remember)

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

	toggleMode() {

		this.formType =
			(this.isLogin())
				? 'registration'
				: 'login';
	}

	isRegistration() {

		return this.formType == 'registration';
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
