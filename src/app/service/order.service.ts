import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/order';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) {
  }


  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders');
  }

  getOrderById(id) {
    return this.db.object('/orders/' + id)
  }


  getOrderByUserId(userId) {
    return this.db.list('/orders/', {
      query: {
        orderByChild: 'userId',
        equalTo: userId

      }
    })
  }

}
