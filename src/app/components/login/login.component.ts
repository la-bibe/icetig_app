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

  constructor(private iconReg:SvgIconRegistryService) { }

  ngOnInit() {
    document.body.style.background = '#525252';
    this.iconReg.loadSvg('assets/pedago-dark.svg');
  }

  onSubmit() {
    let token = '1234567890';


  }

}
