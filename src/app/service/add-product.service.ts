import { Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database' ;
@Injectable()
export class AddProductService {

  constructor(private db : AngularFireDatabase) {
   }

   addProd(product){
     return this.db.list('/products').push(product) ;
   }
   getAll(){
     return this.db.list('/products') ;
   }
   getProduct(productId){
     return this.db.object('/products/'+productId);
   }

   updateProduct(productId , product){
     return this.db.object('/products/'+productId).update(product) ;
   }

   deleteProduct(productId){
     this.db.object('/products/'+productId).remove();
   }

}
