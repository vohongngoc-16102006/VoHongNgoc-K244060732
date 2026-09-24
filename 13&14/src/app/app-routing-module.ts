import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai13ProductList } from './bai13-product-list/bai13-product-list';
import { Bai13ProductDetail } from './bai13-product-detail/bai13-product-detail';
import { Bai14Catalog } from './bai14-catalog/bai14-catalog';

const routes: Routes = [
  { path: 'bai-13', component: Bai13ProductList },
  { path: 'bai-13/:id', component: Bai13ProductDetail },
  { path: 'bai-14', component: Bai14Catalog }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
