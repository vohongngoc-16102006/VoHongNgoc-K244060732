import { Injectable } from '@angular/core';

export interface Product {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/h1.png' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/h2.png' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/h3.png' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductDetail(id: string): Product | undefined {
    return this.products.find(p => p.ProductId === id);
  }
}
