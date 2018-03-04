import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { CustomFormsModule } from 'ng2-validation'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { RouterModule } from '@angular/router' ;

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SuccessOrderComponent } from './success-order/success-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AddProductService } from './service/add-product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component' ;
import { ProductQunatityComponent } from './product-qunatity/product-qunatity.component' ;
import { ViewOrderComponent } from './view-order/view-order.component' ;


import { GAuthService } from './service/g-auth.service';
import { AuthGuardService } from './service/auth-guard.service' ;
import { UserService } from './service/user.service' ;
import { AdminGuardService } from './service/admin-guard.service';
import { CategorieService } from './service/categorie.service';
import { ShoppingCartService } from './service/shopping-cart.service';
import { OrderService } from './service/order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    SuccessOrderComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQunatityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ViewOrderComponent,
  ],
  imports: [
    NgxDatatableModule,
    CustomFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([

      { path :'home' , component :HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path :'login' ,component :LoginComponent },
      { path :'products' ,  component : ProductsComponent },
      { path :'shopping-cart' , component :ShoppingCartComponent},


      { path :'my/orders' , component :MyOrdersComponent , canActivate :[AuthGuardService]},
      { path :'success/:id' , component :SuccessOrderComponent , canActivate :[AuthGuardService]},
      { path :'check-out' , component : CheckOutComponent , canActivate :[AuthGuardService]},

      { path :'admin/orders/:id' , component :ViewOrderComponent , canActivate :[AuthGuardService , AdminGuardService]},
      { path :'admin/products/new' , component: ProductFormComponent, canActivate :[AuthGuardService,AdminGuardService]},
      { path :'admin/products/:id' , component: ProductFormComponent, canActivate :[AuthGuardService,AdminGuardService]},
      { path :'admin/products' , component: AdminProductsComponent, canActivate :[AuthGuardService,AdminGuardService]},
      { path :'admin/orders' , component : AdminOrdersComponent, canActivate :[AuthGuardService,AdminGuardService]}

    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    NgbModule


  ],
  providers: [
  GAuthService ,
  AuthGuardService,
  UserService,
  AdminGuardService,
  CategorieService,
  AddProductService,
  ShoppingCartService,
  OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
