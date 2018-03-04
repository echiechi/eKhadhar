import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { OrderService } from "../service/order.service";
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  constructor(private shoppingCartService: ShoppingCartService) {

  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();

  }


}