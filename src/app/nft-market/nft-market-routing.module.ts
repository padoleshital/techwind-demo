import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftMarketComponent } from './nft-market.component';
import { LeftlayoutComponent } from '../layout/leftlayout/leftlayout.component';
import { NetMarketingComponent } from '../pages/net-marketing/net-marketing.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NftMarketRoutingModule { }
