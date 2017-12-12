import {Component, OnInit, ViewChild} from '@angular/core';
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
  login = '';
  pass = '';

  badCredentials = false;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {

    let login = `${this.login}:${this.pass}`;

    this.http.get(environment.apiUrl + '/security/access', {
      headers: new HttpHeaders().set('Authorization', `Basic ${btoa(login)}`), withCredentials: true
    }).toPromise()
      .then(result => {
        window.localStorage.setItem('session', JSON.stringify((result as ILoginResponse).data));
        this.router.navigateByUrl('');
      })
      .catch(error => {
        this.badCredentials = true;
        setTimeout(() => { this.badCredentials = false }, 3000);
      })
  }
}

export interface ILoginResponse {
  data: {
    expirationDate: Date;
    signatureToken: string;
  }
}
