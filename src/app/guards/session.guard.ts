import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable()
export class SessionGuard implements CanActivate {

  canActivate() {
    const session = window.localStorage.getItem('session');

    if (session && new Date() > JSON.parse(session).expirationDate.date)
        window.localStorage.removeItem('session');

    return true;
  }
}
