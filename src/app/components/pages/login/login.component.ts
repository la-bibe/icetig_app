import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {slideInOutAnimation} from './login.animation';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
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
    }).toPromise()
      .then(result => {
        window.localStorage.setItem('session', JSON.stringify((result as ILoginResponse).data));
        this.router.navigateByUrl('');
      })
      .catch(error => {
        console.log('Error on subimit', error);

      })
  }
}

export interface ILoginResponse {
  data: {
    expirationDate: Date;
    signatureToken: string;
  }
}
