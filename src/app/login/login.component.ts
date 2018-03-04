import { Component, OnInit } from '@angular/core';
import { GAuthService } from '../service/g-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: GAuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
  this.authService.loginWithGoogle();
}
}
