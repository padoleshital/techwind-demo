import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ApplicationComponent } from './application/application.component';
import { IndexAppsComponent } from './index-apps/index-apps.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { RouterModule } from '@angular/router';
import { AccountsModule } from './accounts/accounts.module';
import { RealEstateModule } from './real-estate/real-estate.module';
@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    IndexAppsComponent,  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccountsModule,
    AppRoutingModule,
    LayoutModule,
    FeatherModule, 
    FeatherModule.pick(allIcons),
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FeatherModule,
   ]
})
export class AppModule { }
