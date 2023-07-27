import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BillingComponent } from './billing/billing.component';
import { SocialComponent } from './social/social.component';

import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NotifiacationComponent } from '../pages/accounts/notifiacation/notifiacation.component';
const routes: Routes = [    
  {
    path:'account-pages', 
    children:[
      {
        path:'user-profile',component:UserProfileComponent
      },
      {
        path:'billing',component:BillingComponent
      },
      {
        path:'social',component:SocialComponent
      },
      {
        path:'payments',
        component:PaymentComponent
      },
      {
        path:'invoice',
        component:InvoiceComponent
      },
      {
        path:'notification',
        component:NotifiacationComponent
      }
    ] ,
    component:AccountsComponent,
   
  }
];

// const routes: Routes = [{ path: '', component: AccountsComponent }];

@NgModule({
  imports: [ 
  RouterModule
  ]
})
export class AccountsRoutingModule { }
