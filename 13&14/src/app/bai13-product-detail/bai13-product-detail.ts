import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from '../services/product';

@Component({
  selector: 'app-bai13-product-detail',
  standalone: false,
  templateUrl: './bai13-product-detail.html',
  styleUrl: './bai13-product-detail.css'
})
export class Bai13ProductDetail {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.product = this.productService.getProductDetail(id);
    }
  }

  goBack(): void {
    this.router.navigate(['/bai-13']);
  }
}
