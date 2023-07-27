import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout/layout.component'
import { RealEstateComponent } from './real-estate/real-estate.component'


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'companys',
    loadChildren: () =>
      import('./companys/companys.module').then(m => m.CompanysModule)
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./pages/accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'real-estate',
    loadChildren: () =>
      import('./real-estate/real-estate.module').then(m => m.RealEstateModule)
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'nft-market',
    loadChildren: () =>
      import('./pages/nft-market/nft-market.module').then(
        m => m.NftMarketModule
      )
  },
  {
    path: 'ecommerce',
    loadChildren: () =>
      import('./pages/ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'photography',
    loadChildren: () =>
      import('./photography/photography.module').then(m => m.PhotographyModule)
  },
  {
    path: 'job-careers',
    loadChildren: () =>
      import('./pages/job-careers/job-careers.module').then(
        m => m.JobCareersModule
      )
  },
  {
    path: 'forums',
    loadChildren: () =>
      import('./pages/forums/forums.module').then(m => m.ForumsModule)
  },
  {
    path: 'helpcenter',
    loadChildren: () =>
      import('./pages/helpcenter/helpcenter.module').then(
        m => m.HelpcenterModule
      )
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'email-template',
    loadChildren: () =>
      import('./pages/email-template/email-template.module').then(
        m => m.EmailTemplateModule
      )
  },
  {
    path: 'utility',
    loadChildren: () =>
      import('./pages/utility/utility.module').then(m => m.UtilityModule)
  },
  {
    path: 'special',
    loadChildren: () =>
      import('./pages/special/special.module').then(m => m.SpecialModule)
  },
  {
    path: 'contact',    
    loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  { 
    path: 'portfolio',
    loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'classic-portfolio', loadChildren: () => import('./pages/classic-portfolio/classic-portfolio.module').then(m => m.ClassicPortfolioModule) },
  { path: 'creative-portfolio', loadChildren: () => import('./pages/creative-portfolio/creative-portfolio.module').then(m => m.CreativePortfolioModule) },
  { path: 'masonry-portfolio', loadChildren: () => import('./pages/masonry-portfolio/masonry-portfolio.module').then(m => m.MasonryPortfolioModule) },
  { path: 'portfolio-detail', loadChildren: () => import('./pages/portfolio-detail/portfolio-detail.module').then(m => m.PortfolioDetailModule) },
  { path: 'doc', loadChildren: () => import('./doc/doc.module').then(m => m.DocModule) },
  { path:'photography',loadChildren:() =>import('./photography/photography.module').then(m =>m.PhotographyModule)}
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
