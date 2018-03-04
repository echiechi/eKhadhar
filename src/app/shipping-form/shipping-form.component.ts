import { Component, OnInit,OnDestroy ,Input} from '@angular/core';
import { Subscription } from 'rxjs/Subscription' ;
import { GAuthService } from '../service/g-auth.service' ;
import {OrderService } from "../service/order.service";
import { Router } from '@angular/router' ;
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart' ;
import { Shipping} from '../models/shipping';




@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart :ShoppingCart ;
  shipping = new Shipping() ;
  userId : string ;
  userSubscription : Subscription ;


  constructor(
     private orderService : OrderService ,
     private authService : GAuthService,private router : Router) {

  }


  ngOnInit() {
    this.userSubscription=this.authService.user$.subscribe(user => this.userId = user.uid)
  }

    async placeOrder(){
    let order = new Order(this.userId,this.shipping,this.cart) ;
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/success' , result.key]) ;
    }

  ngOnDestroy(){

    this.userSubscription.unsubscribe();

  }


}
