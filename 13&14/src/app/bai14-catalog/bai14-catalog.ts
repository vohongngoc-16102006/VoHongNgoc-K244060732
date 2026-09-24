import { Component } from '@angular/core';
import { CatalogService, Category } from '../services/catalog';

@Component({
  selector: 'app-bai14-catalog',
  standalone: false,
  templateUrl: './bai14-catalog.html',
  styleUrl: './bai14-catalog.css'
})
export class Bai14Catalog {
  categories: Category[];

  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }
}
