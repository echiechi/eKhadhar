import { Component, OnInit,OnDestroy } from '@angular/core';
import { AddProductService } from '../../service/add-product.service' ;
import {Subscription} from 'rxjs/subscription' ;
import { Product } from '../../models/product' ;
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {

limit :number =5 ;
products : Product[] ;

filteredProducts : any[] ;

subscription :Subscription ;
  constructor(private addProduct : AddProductService) {
    this.subscription=addProduct.getAll().subscribe( products =>this.filteredProducts= this.products = products ) ;}

  ngOnInit() {
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }


  filter(query){
this.filteredProducts = (query) ?
this.products.filter( p => p.title.toLowerCase().includes(query.toLowerCase())) :
this.products ;
  }

  setLimit(lim : HTMLInputElement){
    this.limit=+lim.value ;
  }


}
