import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../service/categorie.service' ;
import { AddProductService } from '../../service/add-product.service' ;
import { Router,ActivatedRoute } from '@angular/router' ;
import { Product } from '../../models/product' ;
import 'rxjs/add/operator/take'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
listCategorie$ ;
product =new Product;

id ;
  constructor(private categorieService: CategorieService,
              private productService : AddProductService ,
              private router : Router,
              private route : ActivatedRoute) {
                this.listCategorie$=categorieService.getCategories() ;
               this.id=  route.snapshot.paramMap.get('id');
              if (this.id){
              productService.getProduct(this.id).take(1).subscribe(p=> Object.assign(this.product,p));
              }
}

  save(product){
    if(this.id)
      this.productService.updateProduct(this.id,product);
      else
      this.productService.addProd(product);

  this.router.navigate(['/admin/products'])
  }

  delete(){
    if(confirm('are you sure you want to delete this product')){
      this.productService.deleteProduct(this.id) ;
      this.router.navigate(['/admin/products'])
    }
  }

  ngOnInit() {
  }

}
