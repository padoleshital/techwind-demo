import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftMarketRoutingModule } from './nft-market-routing.module';
import { NftMarketComponent } from './nft-market.component';
import { SharedModule } from '../shared/shared.module';
import { LeftlayoutComponent } from '../layout/leftlayout/leftlayout.component';


@NgModule({
  declarations: [
    NftMarketComponent,

  ],
  imports: [
    CommonModule,
    NftMarketRoutingModule, 
    SharedModule
    
  ]
})
export class NftMarketModule { }
