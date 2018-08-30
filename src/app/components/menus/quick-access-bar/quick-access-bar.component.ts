import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quick-access-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './quick-access-bar.component.html',
  styleUrls: ['./quick-access-bar.component.scss']
})

export class QuickAccessBarComponent implements OnInit {

    user;
    isActive = false;
  constructor(private apiService: ApiService, private router: Router) {
      this.user = JSON.parse(window.localStorage.getItem('session')).user;
  }

  ngOnInit() {
  }

  onLogout() {

  	console.log("Yes");
    this.apiService.apiDelete('/security/access', '')
      .then(result => {
        window.localStorage.removeItem('session');
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        console.log('Error on logout', error);
      });
  }

  toggleMenu(event) {
      this.isActive = !this.isActive;
  }

  getUrl() {
      return 'https://cdn.local.epitech.eu/userprofil/trombiview/'
          + this.user.firstName.toLowerCase() + '.'
          + this.user.lastName.toLowerCase() + '.jpg';
  }
}
