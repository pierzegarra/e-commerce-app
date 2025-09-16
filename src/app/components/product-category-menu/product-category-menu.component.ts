import { Component, OnInit } from '@angular/core';
import {ProductCategory} from '../../common/product-category';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-category-menu',
  standalone: false,
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[] | undefined = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe({
        next: (data) => {
            console.log('Product Categories= ' + JSON.stringify(data));
            this.productCategories = data;
        },
        error: (err: any) => {
        },
        complete: () => {
        }
  });
  }
}
