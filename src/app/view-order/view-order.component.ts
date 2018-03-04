import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { OrderService } from '../service/order.service' ;


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
orders$ ;
id;
  constructor( private _route: ActivatedRoute ,private orderService:OrderService){

     }


  ngOnInit() {
       this.id=this._route.snapshot.params['id'];
     this.orders$ = this.orderService.getOrderById(this.id) ;
  }

}
