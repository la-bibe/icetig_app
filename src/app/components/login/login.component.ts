import { Component, OnInit } from '@angular/core';
import {SvgIconRegistryService} from "angular-svg-icon";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = '';
  pass = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
