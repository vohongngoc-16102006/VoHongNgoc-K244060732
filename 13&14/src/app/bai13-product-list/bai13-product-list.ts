import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../services/product';

@Component({
  selector: 'app-bai13-product-list',
  standalone: false,
  templateUrl: './bai13-product-list.html',
  styleUrl: './bai13-product-list.css'
})
export class Bai13ProductList {
  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.products = this.productService.getProducts();
  }

  viewDetail(id: string): void {
    this.router.navigate(['/bai-13', id]);
  }
}