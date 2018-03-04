import { Component, OnInit ,Input } from '@angular/core';
import { Product } from '../models/product' ;
import { ShoppingCartService } from '../service/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-qunatity',
  templateUrl: './product-qunatity.component.html',
  styleUrls: ['./product-qunatity.component.css']
})
export class ProductQunatityComponent implements OnInit {
  @Input('product') product :Product ;
  @Input('shopping-cart') shoppingCart :ShoppingCart ;

    constructor( private cartService : ShoppingCartService) { }

    ngOnInit() {
    }
  addToCart(){
  this.cartService.addToCart(this.product);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product)
  }


}
