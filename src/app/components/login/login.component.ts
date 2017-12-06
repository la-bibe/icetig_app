import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import { slideInOutAnimation } from './login.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class LoginComponent implements OnInit {
  @ViewChild('loginTooltip') loginTooltip: NgbTooltip;
  @ViewChild('passTooltip') passTooltip: NgbTooltip;
  login = '';
  pass = '';

  loginErrorMessage = 'Bad login';
  passErrorMessage = 'Bad pass';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    if (!(new RegExp('^[a-zA-Z-]+[0-9]?\.[a-zA-Z-]+@epitech\.eu$').test(this.login))) {
      this.loginTooltip.open();
    }

    // this.loginTooltip.open();

    setTimeout(() => {this.loginTooltip.close(); this.passTooltip.close(); }, 2000);
  }
}
