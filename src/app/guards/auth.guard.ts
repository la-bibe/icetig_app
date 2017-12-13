import {Injectable} from "@angular/core";
import {Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(state: RouterStateSnapshot) {
    return (this.checkLogin(state.url));
  }

  checkLogin(url) {
    if (window.localStorage.getItem('session'))
      return true;
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
