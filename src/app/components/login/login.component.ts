import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ApiService} from "../../services/api.service";


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

  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  onSubmit() {

    if (!(new RegExp('^[a-zA-Z-]+[0-9]?\.[a-zA-Z-]+@epitech\.eu$').test(this.login))) {
      this.loginTooltip.open();
    // this.loginTooltip.open();

    let header = `${this.login}:${this.pass}`;

    console.log(environment.apiUrl);

    this.http.get(environment.apiUrl, {
      headers: new HttpHeaders().set('Authorization', 'Basic $(btoa())')
    }).subscribe(data => {
      console.log(data);
    });

    this.apiService.get('grez');

    //setTimeout(() => {this.loginTooltip.close(); this.passTooltip.close(); }, 2000);
  }
}
