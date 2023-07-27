import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexSaasComponent } from './index-saas/index-saas.component';
import { SaasComponent } from './saas/saas.component';
import { IndexClassicSaasComponent } from './index-classic-saas/index-classic-saas.component';
import { IndexModernSaasComponent } from './index-modern-saas/index-modern-saas.component';
import { IndexAppsComponent } from './index-apps/index-apps.component';
import { IndexClassicAppComponent } from './index-classic-app/index-classic-app.component';
import { IndexSmartwatchComponent } from './index-smartwatch/index-smartwatch.component';
import { IndexMarketingComponent } from './index-marketing/index-marketing.component';
import { IndexSeoComponent } from './index-seo/index-seo.component';
import { IndexItSolutionComponent } from './index-it-solution/index-it-solution.component';
import { IndexCharityComponent } from './index-charity/index-charity.component';
import { IndexItSolutionTwoComponent } from './index-it-solution-two/index-it-solution-two.component';
import { IndexDigitalAgencyComponent } from './index-digital-agency/index-digital-agency.component';
import { ItsolutionComponent } from './itsolution/itsolution.component';
import { ItsolutionTwoComponent } from './itsolution-two/itsolution-two.component';
import { DigitalAgencyComponent } from './digital-agency/digital-agency.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { HostingComponent } from './hosting/hosting.component';
import { NetMarketingComponent } from './net-marketing/net-marketing.component';
import { HotelResortComponent } from './hotel-resort/hotel-resort.component';
import { CafeComponent } from './cafe/cafe.component';
import { GymComponent } from './gym/gym.component';
import { YogaComponent } from './yoga/yoga.component';
import { SpaSalonComponent } from './spa-salon/spa-salon.component';
import { HomeComponent } from './home/home.component';
import { FeatherModule } from 'angular-feather';
import { SharedModule } from '../shared/shared.module';
import { IndexSoftwareComponent } from './index-software/index-software.component';
import { IndexPaymentComponent } from './index-payment/index-payment.component';
import { IndexJobComponent } from './index-job/index-job.component';
import { IndexStartupComponent } from './index-startup/index-startup.component';
import { IndexBusinessComponent } from './index-business/index-business.component';
import { IndexCorporateComponent } from './index-corporate/index-corporate.component';
import { IndexCorporateTwoComponent } from './index-corporate-two/index-corporate-two.component';
import { IndexRealEstateComponent } from './index-real-estate/index-real-estate.component';
import { IndexConsultingComponent } from './index-consulting/index-consulting.component';
import { IndexInsuranceComponent } from './index-insurance/index-insurance.component';
import { IndexConstructionComponent } from './index-construction/index-construction.component';
import { IndexLawFarmComponent } from './index-law-farm/index-law-farm.component';
import { IndexVideoComponent } from './index-video/index-video.component';
import { IndexPersonalComponent } from './index-personal/index-personal.component';
import { IndexPortfolioComponent } from './index-portfolio/index-portfolio.component';
import { IndexPotographyComponent } from './index-potography/index-potography.component';
import { IndexStudioComponent } from './index-studio/index-studio.component';
import { IndexCoworkingComponent } from './index-coworking/index-coworking.component';
import { IndexOnlineCoursceComponent } from './index-online-coursce/index-online-coursce.component';
import { ConferenceComponent } from './index-event/conference/conference.component';
import { IndexHospitalComponent } from './index-hospital/index-hospital.component';
import { IndexPhonenumberComponent } from './index-phonenumber/index-phonenumber.component';
import { IndexForumComponent } from './index-forum/index-forum.component';
import { IndexShopEcommerceComponent } from './index-shop-ecommerce/index-shop-ecommerce.component';
import { IndexCryptoComponent } from './index-crypto/index-crypto.component';
import { IndexLandingOneComponent } from './index-landing-one/index-landing-one.component';
import { IndexLandingTwoComponent } from './index-landing-two/index-landing-two.component';
import { IndexLandingThreeComponent } from './index-landing-three/index-landing-three.component';
import { IndexLandingFourComponent } from './index-landing-four/index-landing-four.component';
import { IndexServiceComponent } from './index-service/index-service.component';
import { IndexFoodBlogComponent } from './index-food-blog/index-food-blog.component';
import { IndexBlogComponent } from './index-blog/index-blog.component';
import { IndexFurnitureComponent } from './index-furniture/index-furniture.component';
import { IndexLandingFiveComponent } from './index-landing-five/index-landing-five.component';
import { FoodRecipeComponent } from './food-recipe/food-recipe.component';
import { IndexCourseComponent } from './index-course/index-course.component';
@NgModule({
  declarations: [    
    IndexSaasComponent,
    SaasComponent,
    IndexClassicSaasComponent,
    IndexModernSaasComponent,
    IndexAppsComponent,
    IndexClassicAppComponent,
    IndexSmartwatchComponent,
    IndexMarketingComponent,
    IndexSeoComponent,
    IndexItSolutionComponent,
    IndexCharityComponent,
    IndexItSolutionTwoComponent,
    IndexDigitalAgencyComponent,
    ItsolutionComponent,
    ItsolutionTwoComponent,
    DigitalAgencyComponent,
    RestaurentComponent,
    HostingComponent,
    NetMarketingComponent,
    HotelResortComponent,
    CafeComponent,
    GymComponent,
    YogaComponent,
    SpaSalonComponent,
    HomeComponent,
    IndexSoftwareComponent,
    IndexPaymentComponent,
    IndexJobComponent,
    IndexStartupComponent,
    IndexBusinessComponent,
    IndexCorporateComponent,
    IndexCorporateTwoComponent,
    IndexRealEstateComponent,
    IndexConsultingComponent,
    IndexInsuranceComponent,
    IndexConstructionComponent,
    IndexLawFarmComponent,
    IndexVideoComponent,
    IndexPersonalComponent,
    IndexPortfolioComponent,
    IndexPotographyComponent,
    IndexStudioComponent,
    IndexCoworkingComponent,
    IndexOnlineCoursceComponent,
    ConferenceComponent,
    IndexHospitalComponent,
    IndexPhonenumberComponent,
    IndexForumComponent,
    IndexShopEcommerceComponent,
    IndexCryptoComponent,
    IndexLandingOneComponent,
    IndexLandingTwoComponent,
    IndexLandingThreeComponent,
    IndexLandingFourComponent,
    IndexServiceComponent,
    IndexFoodBlogComponent,
    IndexBlogComponent,
    IndexFurnitureComponent,
    IndexLandingFiveComponent,
    FoodRecipeComponent,
    IndexCourseComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FeatherModule,
    SharedModule
  ]
})
export class PagesModule { }

