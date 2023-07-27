import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexSaasComponent } from './index-saas/index-saas.component'
import { IndexClassicSaasComponent } from './index-classic-saas/index-classic-saas.component'
import { IndexAppsComponent } from './index-apps/index-apps.component'
import { IndexClassicAppComponent } from './index-classic-app/index-classic-app.component'
import { IndexSmartwatchComponent } from './index-smartwatch/index-smartwatch.component'
import { IndexMarketingComponent } from './index-marketing/index-marketing.component'
import { IndexSeoComponent } from './index-seo/index-seo.component'
import { IndexItSolutionComponent } from './index-it-solution/index-it-solution.component'
import { IndexDigitalAgencyComponent } from './index-digital-agency/index-digital-agency.component'
import { IndexItSolutionTwoComponent } from './index-it-solution-two/index-it-solution-two.component'
import { ItsolutionComponent } from './itsolution/itsolution.component'
import { ItsolutionTwoComponent } from './itsolution-two/itsolution-two.component'
import { DigitalAgencyComponent } from './digital-agency/digital-agency.component'
import { RestaurentComponent } from './restaurent/restaurent.component'
import { HostingComponent } from './hosting/hosting.component'
import { NetMarketingComponent } from './net-marketing/net-marketing.component'
import { HotelResortComponent } from './hotel-resort/hotel-resort.component'
import { CafeComponent } from './cafe/cafe.component'
import { GymComponent } from './gym/gym.component'
import { YogaComponent } from './yoga/yoga.component'
import { SpaSalonComponent } from './spa-salon/spa-salon.component'
import { HomeComponent } from './home/home.component'
import { IndexSoftwareComponent } from './index-software/index-software.component'
import { IndexPaymentComponent } from './index-payment/index-payment.component'
import { IndexCharityComponent } from './index-charity/index-charity.component'
import { IndexJobComponent } from './index-job/index-job.component'
import { IndexStartupComponent } from './index-startup/index-startup.component'
import { IndexBusinessComponent } from './index-business/index-business.component'
import { IndexCorporateComponent } from './index-corporate/index-corporate.component'
import { IndexCorporateTwoComponent } from './index-corporate-two/index-corporate-two.component'
import { IndexRealEstateComponent } from './index-real-estate/index-real-estate.component'
import { IndexConsultingComponent } from './index-consulting/index-consulting.component'
import { IndexInsuranceComponent } from './index-insurance/index-insurance.component'
import { IndexConstructionComponent } from './index-construction/index-construction.component'
import { IndexLawFarmComponent } from './index-law-farm/index-law-farm.component'
import { IndexVideoComponent } from './index-video/index-video.component'
import { IndexPersonalComponent } from './index-personal/index-personal.component'
import { IndexPortfolioComponent } from './index-portfolio/index-portfolio.component'
import { IndexPotographyComponent } from './index-potography/index-potography.component'
import { IndexStudioComponent } from './index-studio/index-studio.component'
import { IndexCoworkingComponent } from './index-coworking/index-coworking.component'
import { IndexOnlineCoursceComponent } from './index-online-coursce/index-online-coursce.component'
import { ConferenceComponent } from './index-event/conference/conference.component'
import { IndexHospitalComponent } from './index-hospital/index-hospital.component'
import { IndexPhonenumberComponent } from './index-phonenumber/index-phonenumber.component'
import { IndexLandingFourComponent } from './index-landing-four/index-landing-four.component'
import { IndexShopEcommerceComponent } from './index-shop-ecommerce/index-shop-ecommerce.component'
import { IndexCryptoComponent } from './index-crypto/index-crypto.component'
import { IndexLandingOneComponent } from './index-landing-one/index-landing-one.component'
import { IndexLandingTwoComponent } from './index-landing-two/index-landing-two.component'
import { IndexLandingThreeComponent } from './index-landing-three/index-landing-three.component'
import { IndexServiceComponent } from './index-service/index-service.component'
import { IndexFoodBlogComponent } from './index-food-blog/index-food-blog.component'
import { IndexBlogComponent } from './index-blog/index-blog.component'
import { IndexFurnitureComponent } from './index-furniture/index-furniture.component'
import { IndexLandingFiveComponent } from './index-landing-five/index-landing-five.component'
import { LayoutComponent } from '../layout/layout/layout.component'
import { FoodRecipeComponent } from './food-recipe/food-recipe.component'
import { IndexCourseComponent } from './index-course/index-course.component'
import { IndexForumComponent } from './index-forum/index-forum.component'
import { CentrelayoutComponent } from '../layout/centrelayout/centrelayout.component'
import { ProductGridComponent } from './ecommerce/product-grid/product-grid.component'
import { ProductGridTwoComponent } from './ecommerce/product-grid-two/product-grid-two.component'
import { IndexModernSaasComponent } from './index-modern-saas/index-modern-saas.component'
import { LeftlayoutComponent } from '../layout/leftlayout/leftlayout.component'

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,  
    children:[
      { path: '', component: HomeComponent },
      { path: 'index-saas', component: IndexSaasComponent },
      { path: 'index-classic-saas', component: IndexClassicSaasComponent },
      { path: 'index-modern-saas', component: IndexModernSaasComponent },
      { path: 'index-apps', component: IndexAppsComponent },
      { path: 'index-classic-app', component: IndexClassicAppComponent },
      { path: 'index-smartwatch', component: IndexSmartwatchComponent },
      { path: 'index-marketing', component: IndexMarketingComponent },
      { path: 'index-seo', component: IndexSeoComponent },
      { path: 'index-it-solution', component: IndexItSolutionComponent },
      { path: 'index-digital-agency', component: IndexDigitalAgencyComponent },
      { path: 'index-it-solution-two', component: IndexItSolutionTwoComponent },
      { path: 'itsolution-two', component: ItsolutionTwoComponent },
      { path: 'itsolution', component: ItsolutionComponent },
      { path: 'digital-agency', component: DigitalAgencyComponent },
      { path: 'restaurent', component: RestaurentComponent },
      { path: 'hosting', component: HostingComponent },      
      { path: 'hotel-resort', component: HotelResortComponent },
      { path: 'cafe', component: CafeComponent },
      { path: 'gym', component: GymComponent },
      { path: 'yoga', component: YogaComponent },
      { path: 'spa-salon', component: SpaSalonComponent },
      { path: 'index-software', component: IndexSoftwareComponent },
      { path: 'index-payment', component: IndexPaymentComponent },
      { path: 'index-charity', component: IndexCharityComponent },
      { path: 'index-job', component: IndexJobComponent },
      { path: 'index-startup', component: IndexStartupComponent },
      { path: 'index-business', component: IndexBusinessComponent },
      { path: 'index-corporate', component: IndexCorporateComponent },
      { path: 'index-corporate-two', component: IndexCorporateTwoComponent },
      { path: 'index-real-estate', component: IndexRealEstateComponent },
      { path: 'index-consulting', component: IndexConsultingComponent },
      { path: 'index-insurance', component: IndexInsuranceComponent },
      { path: 'index-construction', component: IndexConstructionComponent },
      { path: 'index-law-farm', component: IndexLawFarmComponent },
      { path: 'index-video', component: IndexVideoComponent },
      { path: 'index-personal', component: IndexPersonalComponent },
      { path: 'index-portfolio', component: IndexPortfolioComponent },
      { path: 'index-photography', component: IndexPotographyComponent },
      { path: 'index-studio', component: IndexStudioComponent },
      { path: 'index-coworking', component: IndexCoworkingComponent },
      { path: 'index-onlinecourses', component: IndexOnlineCoursceComponent },
      { path: 'index-event', component: ConferenceComponent },
      { path: 'index-hospital', component: IndexHospitalComponent },
      { path: 'index-phonenumber', component: IndexPhonenumberComponent },
      { path: 'index-forums', component: IndexForumComponent }, 
      { path: 'index-crypto', component: IndexCryptoComponent },      
      { path: 'index-landing-one', component: IndexLandingOneComponent },
      { path: 'index-landing-two', component: IndexLandingTwoComponent },
      { path: 'index-landing-three', component: IndexLandingThreeComponent },
      { path: 'index-landing-four', component: IndexLandingFourComponent },
      { path: 'index-service', component: IndexServiceComponent },
      { path: 'index-food-blog', component: IndexFoodBlogComponent },
      { path: 'index-blog', component: IndexBlogComponent },
      { path: 'index-furniture', component: IndexFurnitureComponent },
      { path: 'index-landing-five', component: IndexLandingFiveComponent },      
      { path:'food-recipe',component:FoodRecipeComponent},
      { path:'index-course', component:IndexCourseComponent}
    ],   
  },
  {
    path:'nft',
    component:LeftlayoutComponent,
    children:[      
        { path: 'net-marketing', component: NetMarketingComponent },
      
    ]
  }

  // {
  //   path:'',
  //   component:CentrelayoutComponent,
  //   children:[
  //     { path: 'index-shop', component: IndexShopEcommerceComponent },
  //     {
  //       path:'shop-grid', component:ProductGridComponent
  //     },
  //     {
  //       path:'shop-grid-two', component:ProductGridTwoComponent
  //     }
     
  //   ]
  // }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
