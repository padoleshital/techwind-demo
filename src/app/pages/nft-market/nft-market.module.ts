import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftMarketRoutingModule } from './nft-market-routing.module';
import { NftMarketComponent } from './nft-market.component';
import { ExploreComponent } from './explore/explore.component';
import { AuctionComponent } from './auction/auction.component';
import { CollectionsComponent } from './collections/collections.component';
import { CreatorsComponent } from './creators/creators.component';
import { CreatorsProfileComponent } from './creators-profile/creators-profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { WalletComponent } from './wallet/wallet.component';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { SingleNftComponent } from './single-nft/single-nft.component';


@NgModule({
  declarations: [
    NftMarketComponent,
    ExploreComponent,
    AuctionComponent,
    CollectionsComponent,
    CreatorsComponent,
    CreatorsProfileComponent,
    ProfileEditComponent,
    WalletComponent,
    CreateNftComponent,
    SingleNftComponent
  ],
  imports: [
    CommonModule,
    NftMarketRoutingModule
  ]
})
export class NftMarketModule { }
