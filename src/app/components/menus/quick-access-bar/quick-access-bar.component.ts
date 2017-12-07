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

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.apiService.apiDelete('/security/access', '')
      .subscribe(data => {
        window.localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
      });
  }

}
