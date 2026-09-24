import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Bai13ProductList } from './bai13-product-list/bai13-product-list';
import { Bai13ProductDetail } from './bai13-product-detail/bai13-product-detail';
import { Bai14Catalog } from './bai14-catalog/bai14-catalog';

@NgModule({
  declarations: [App, Bai13ProductList, Bai13ProductDetail, Bai14Catalog],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
