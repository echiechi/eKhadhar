import { Component, OnInit,Input } from '@angular/core';
import { CategorieService } from '../../service/categorie.service' ;


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
categorie$;
@Input('category') category ;
  constructor(  private categorieService : CategorieService) {

    this.categorie$=categorieService.getCategories();
   }

  ngOnInit() {
  }

}
