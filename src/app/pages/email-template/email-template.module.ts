import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailTemplateRoutingModule } from './email-template-routing.module';
import { EmailTemplateComponent } from './email-template.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { EmailPasswordResetComponent } from './email-password-reset/email-password-reset.component';
import { EmailAlertComponent } from './email-alert/email-alert.component';
import { EmailInvoiceComponent } from './email-invoice/email-invoice.component';


@NgModule({
  declarations: [
    EmailTemplateComponent,
    EmailConfirmationComponent,
    EmailPasswordResetComponent,
    EmailAlertComponent,
    EmailInvoiceComponent
  ],
  imports: [
    CommonModule,
    EmailTemplateRoutingModule
  ]
})
export class EmailTemplateModule { }
