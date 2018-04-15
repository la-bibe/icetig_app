import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quick-access-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './quick-access-bar.component.html',
  styleUrls: ['./quick-access-bar.component.scss']
})

export class QuickAccessBarComponent implements OnInit {

    user={};
  constructor(private apiService: ApiService, private router: Router) {
      this.user = JSON.parse(window.localStorage.getItem('session')).user;
      console.log(this.user);
  }

  ngOnInit() {
  }

  onLogout() {
    this.apiService.apiDelete('/security/access', '')
      .then(result => {
        window.localStorage.removeItem('session');
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        console.log("Error on logout", error);
      });
  }

}
