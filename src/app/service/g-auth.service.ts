import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router' ;
import { AppUser } from '../models/app-user' ;
import { UserService } from '../service/user.service';
import 'rxjs/add/operator/switchMap' ;
import 'rxjs/add/observable/of' ;
import * as firebase from 'firebase';
@Injectable()
export class GAuthService {

  provider: firebase.auth.GoogleAuthProvider;
  user$ : Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth,private route : ActivatedRoute ,private userService :UserService) {
  this.user$=afAuth.authState ;
  this.provider = new firebase.auth.GoogleAuthProvider();

  }

  loginWithGoogle() {
    let returnUrl =this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    localStorage.setItem('returnUrl', returnUrl ) ;
    console.log(returnUrl);
  return this.afAuth.auth.signInWithRedirect(this.provider);

  }

  logout() {

  return firebase.auth().signOut();

  }
  get appUser$ (): Observable<AppUser>{
    return this.user$.switchMap(user =>{
      if (user) return this.userService.getUser(user.uid)
return Observable.of(null);
    })
  }


}
