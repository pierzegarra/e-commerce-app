import {Component, OnInit} from '@angular/core';
import {Product} from '../../common/product';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentCategoryId: number | null = 1;
  currentCategoryName: string ="";
  searchMode: boolean = false;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe({
        next: () => {
            this.listProducts();
        },
        error: (err) => {
            console.log(err);
        },
        complete: () => {
        }
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    console.log("this.searchMode " + this.searchMode)
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe({
      next: (data: any) => {
        this.products = data;

      },
      error: (err: any) => {

      },
      complete: () => {}
    });
  }

  handleListProducts() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      // get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    } else {
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    this.productService.getProductList(this.currentCategoryId).subscribe({
        next: (data: any) => {
            console.log(data);
            this.products = data;
        },
        error: (err: any) => {},
        complete: () => {}
    })
  }
}
