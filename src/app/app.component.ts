import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { GAuthService } from './service/g-auth.service';
import {UserService}from './service/user.service';


@Component({

selector: 'app-root',

templateUrl: './app.component.html',

styleUrls: ['./app.component.css']

})

export class AppComponent {

constructor(private userService : UserService,public authService: GAuthService, private router: Router) {
authService.user$.subscribe( user =>{

    if(!user)return;

    userService.save(user);

    let returnUrl = localStorage.getItem('returnUrl');

    if(!returnUrl)return ;

      localStorage.removeItem('returnUrl');
      router.navigate([returnUrl]);
})
/*this.user = this.authService.afAuth.authState;

this.user.subscribe( (auth) => {

if (auth) {

this.isLogged = true;

this.pseudo = auth.displayName;

this.email = auth.email;

console.log('Connecté');

console.log(auth);



} else {

console.log('Déconnecté');

this.isLogged = false;

this.pseudo = '';

this.email = '';



}});*/
}

}
