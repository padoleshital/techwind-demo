import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ProductGridTwoComponent } from './product-grid-two/product-grid-two.component';
import { CentrelayoutComponent } from 'src/app/layout/centrelayout/centrelayout.component';

const routes: Routes = [
  {
    path:'',
    component:CentrelayoutComponent,
    children:[
      {
        path:'shop-grid',component:ProductGridComponent
      },
      {
        path:'shop-grid-two',component:ProductGridTwoComponent
      },
      {
        path:'shop-item-detail',component:ProductDetailComponent
      },
      {
        path:'shop-cart',component:ShopcartComponent
      },
      {
        path:'shop-checkout',component:CheckoutComponent
      },
      {
        path:'shop-account',component:MyAccountComponent
      }

    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
