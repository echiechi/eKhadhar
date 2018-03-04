import { Component, OnInit } from '@angular/core';
import { GAuthService } from '../service/g-auth.service';
import { OrderService } from '../service/order.service' ;


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
orders$  ;
  constructor(private orderService:OrderService, private authService : GAuthService) { }

  ngOnInit() {
     this.orders$ = this.authService.user$.switchMap(x=>this.orderService.getOrderByUserId(x.uid)) ;
  }

}
