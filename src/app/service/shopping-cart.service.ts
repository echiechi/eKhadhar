import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database' ;
import { Product } from '../models/product';
import {ShoppingCart} from '../models/shopping-cart';
import { Observable } from 'rxjs/observable' ;
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/take' ;


@Injectable()
export class ShoppingCartService {

  constructor(private db : AngularFireDatabase) { }
create(){
  return this.db.list('/shopping-cart').push({
    DateCreated : new Date().getTime()
  })
}
async clearCart(){
let  cartId= await this.getOrCreateCartId() ;
  this.db.object('/shopping-cart/'+cartId+'/items').remove() ;
}


async getCart():Promise<Observable<ShoppingCart>>{
  let cartId= await this.getOrCreateCartId() ;
  return this.db.object('/shopping-cart/'+cartId).map(x=>new ShoppingCart(x.items));
}

async getOrCreateCartId() :Promise<string>{

  let cardId = localStorage.getItem('cardId') ;
  if (cardId) return cardId;

    let result = await this.create() ;
    localStorage.setItem('cardId',result.key)
    return result.key;
}

getItem(cartId,productKey){
  return  this.db.object('/shopping-cart/'+cartId+'/items/'+productKey)
}

async addToCart(product :Product){
this.updateQuant(product,+1);

}

async removeFromCart(product : Product){
this.updateQuant(product,-1);
}

private async updateQuant(product , change){
  let cartId =await this.getOrCreateCartId() ;
  let item$ = this.getItem(cartId,product.$key) ;

item$.take(1).subscribe(item =>
   {let quantity =(item.quantity || 0 )+ change ;
     if (quantity==0) item$.remove() ;
     else
     item$.update({
  title : product.title ,
  price : product.price ,
  addimg :product.addimg ,
  quantity : quantity }) ;})
}

}
