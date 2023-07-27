import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftMarketComponent } from './nft-market.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { ExploreComponent } from './explore/explore.component';
import { AuctionComponent } from './auction/auction.component';
import { CollectionsComponent } from './collections/collections.component';
import { CreatorsComponent } from './creators/creators.component';
import { CreatorsProfileComponent } from './creators-profile/creators-profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { WalletComponent } from './wallet/wallet.component';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { SingleNftComponent } from './single-nft/single-nft.component';
import { NavbarleftComponent } from 'src/app/layout/navbarleft/navbarleft.component';
import { LeftnavbarlayoutComponent } from 'src/app/layout/leftnavbarlayout/leftnavbarlayout.component';

const routes: Routes = [
  { path: '', 
    component:LeftnavbarlayoutComponent,
    children:[
      {
        path:'', component:ExploreComponent
      },
      {
        path:'nft-auction',component:AuctionComponent
      },
      {
        path:'nft-collection',component:CollectionsComponent
      },
      {
        path:'nft-creators',component:CreatorsComponent
      },
      {
        path:'nft-creator-profile',component:CreatorsProfileComponent
      },
      {
        path:'nft-creator-profile-edit', component:ProfileEditComponent
      },
      {
        path:'nft-wallet',component:WalletComponent
      },
      {
        path:'nft-create-item',component:CreateNftComponent
      },
      {
        path:'nft-detail',component:SingleNftComponent
      }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NftMarketRoutingModule { }
