import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductGridTwoComponent } from './product-grid-two/product-grid-two.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './my-account/my-account.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    ProductGridComponent,
    ProductGridTwoComponent,
    ProductDetailComponent,
    ShopcartComponent,
    CheckoutComponent,
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
