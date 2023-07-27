import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SocialComponent } from './social/social.component';
import { NotifiacationComponent } from './notifiacation/notifiacation.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    AccountsComponent,
    UserProfileComponent,
    BillingComponent,
    PaymentComponent,
    InvoiceComponent,
    SocialComponent,
    NotifiacationComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
