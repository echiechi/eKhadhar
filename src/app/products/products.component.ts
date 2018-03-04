import { Component, OnInit,OnDestroy } from '@angular/core';
import { AddProductService } from '../service/add-product.service' ;
import { ShoppingCartService } from '../service/shopping-cart.service' ;
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router' ;
import { Product }from '../models/product';
import { ShoppingCart } from '../models/shopping-cart' ;
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
products:Product[];
filteredProd:Product[];
cart$ : Observable<ShoppingCart> ;
category ;

  constructor( private productService :AddProductService ,
   private route : ActivatedRoute, private shoppingCartService :ShoppingCartService ) {}

   async ngOnInit() {

     this.cart$= await this.shoppingCartService.getCart() ;
     this.populateProducts();
}



  private populateProducts(){
    this.productService.getAll().switchMap(prod => {this.products=prod ; return this.route.queryParamMap ;}).
      subscribe(params=>{
        this.category = params.get('category');
        this.applyFilter() ;
        });
  }



  private applyFilter(){
    this.filteredProd = (this.category) ?
    this.products.filter(p=> p.categorie == this.category) :
    this.products;
  }


}
