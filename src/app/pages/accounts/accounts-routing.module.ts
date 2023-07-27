import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BillingComponent } from 'src/app/accounts/billing/billing.component';
import { PaymentComponent } from 'src/app/accounts/payment/payment.component';
import { InvoiceComponent } from 'src/app/accounts/invoice/invoice.component';
import { NotificationComponent } from 'src/app/accounts/notification/notification.component';
import { SettingComponent } from 'src/app/accounts/setting/setting.component';
import { SocialComponent } from 'src/app/accounts/social/social.component';


const routes: Routes = [
  { path: '',
   component: LayoutComponent,
   children:[
    {
      path:'user-profile', component:UserProfileComponent
    },
    {
      path:'user-billing', component:BillingComponent
    },
    {
      path:'user-payment',component:PaymentComponent
    },
    {
      path:'user-invoice',component:InvoiceComponent
    },
    {
      path:'user-social',component:SocialComponent
    },
    {
      path:'user-notification',component:NotificationComponent
    },
    {
      path:'user-setting', component:SettingComponent
    }

   ]
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
