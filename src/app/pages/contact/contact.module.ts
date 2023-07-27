import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactOneComponent } from './contact-one/contact-one.component';
import { ContactTwoComponent } from './contact-two/contact-two.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactDetailComponent,
    ContactOneComponent,
    ContactTwoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
