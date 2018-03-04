import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import { GAuthService } from '../service/g-auth.service' ;
import { Observable } from 'rxjs/Observable' ;
import {AppUser} from '../models/app-user' ;
import { ShoppingCartService } from '../service/shopping-cart.service' ;
import { ShoppingCart} from '../models/shopping-cart' ;

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

activ=[true,false,false,false,false]
appUser:AppUser ;
cart$ :Observable<ShoppingCart>


  constructor(public authService :GAuthService ,
    private router :Router ,
    private shoppingCartService : ShoppingCartService) {

    }


async ngOnInit() {

  this.authService.appUser$.subscribe(appUser => this.appUser=appUser);
this.cart$=await this.shoppingCartService.getCart() ;

  }


logout() {

this.authService.logout();
this.router.navigate(['/login']);

}


changeS(a){
  for(let i=0 ;i<5;i++){
    this.activ[i]=false ;
  }
  this.activ[a]=true;
}

}
