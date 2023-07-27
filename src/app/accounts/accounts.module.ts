import { NgModule } from '@angular/core';


import { AccountsRoutingModule } from './accounts-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SocialComponent } from './social/social.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule} from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ 
    UserProfileComponent,
    BillingComponent,   
    PaymentComponent,
    InvoiceComponent,
    SocialComponent,
    NotificationComponent,
    SettingComponent,
    AccountsComponent,
   
  ],
  imports: [
    CommonModule ,
    RouterModule ,
  
  ]
})
export class AccountsModule { }
