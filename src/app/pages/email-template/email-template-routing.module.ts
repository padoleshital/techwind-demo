import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailTemplateComponent } from './email-template.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';

import { EmailPasswordResetComponent } from './email-password-reset/email-password-reset.component';
import { EmailAlertComponent } from './email-alert/email-alert.component';
import { EmailInvoiceComponent } from './email-invoice/email-invoice.component';

const routes: Routes = [
  { 
      path:'email-confirmation',
      component: EmailConfirmationComponent
    },
    {
      path:'email-password-reset',
      component:EmailPasswordResetComponent
    },
    {
      path:'email-alert',
      component:EmailAlertComponent
    },
    {
      path:'email-invoice',
      component:EmailInvoiceComponent
    }
  ]
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailTemplateRoutingModule { }
