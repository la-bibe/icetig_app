import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginTooltip') loginTooltip: NgbTooltip;
  @ViewChild('passTooltip') passTooltip: NgbTooltip;
  login = '';
  pass = '';

  loginErrorMessage = 'Bad login';
  passErrorMessage = 'Bad pass';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {

    //if (!(new RegExp('^[a-zA-Z-]+[0-9]?\.[a-zA-Z-]+@epitech\.eu$').test(this.login)))
    //this.loginTooltip.open();

    let login = `${this.login}:${this.pass}`;

    this.http.get(environment.apiUrl + '/security/access', {
      headers: new HttpHeaders().set('Authorization', `Basic ${btoa(login)}`), withCredentials: true
    }).subscribe(data => {
      window.localStorage.setItem('token', (data as ILoginResponse).data.signatureToken);
      this.router.navigateByUrl('');
    });
  }
}

export interface ILoginResponse {
  data: {
    signatureToken: string;
  }
}
