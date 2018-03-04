import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router' ;
import { GAuthService } from './g-auth.service' ;
import { UserService } from './user.service' ;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;
@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private auth :GAuthService ,private userService :UserService ) { }

  canActivate():Observable<boolean>{
    return this.auth.appUser$.map(appUser => appUser.isAdmin) }

}
