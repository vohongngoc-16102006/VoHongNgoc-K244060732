import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Bai13ProductList } from './bai13-product-list/bai13-product-list';
import { Bai13ProductDetail } from './bai13-product-detail/bai13-product-detail';
import { Bai14Catalog } from './bai14-catalog/bai14-catalog';
import { Bai18Customers } from './bai18-customers/bai18-customers';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, Bai13ProductList, Bai13ProductDetail, Bai14Catalog, Bai18Customers],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
