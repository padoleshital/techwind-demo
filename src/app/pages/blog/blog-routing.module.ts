import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogGalleryPostComponent } from './blog-gallery-post/blog-gallery-post.component';
import { BlogStandardPostComponent } from './blog-standard-post/blog-standard-post.component';
import { BlogYoutubePostComponent } from './blog-youtube-post/blog-youtube-post.component';
import { BlogVimeoPostComponent } from './blog-vimeo-post/blog-vimeo-post.component';
import { BlogAudioPostComponent } from './blog-audio-post/blog-audio-post.component';
import { BlogBlockquotePostComponent } from './blog-blockquote-post/blog-blockquote-post.component';
import { BlogLeftSidebarPostComponent } from './blog-left-sidebar-post/blog-left-sidebar-post.component';

const routes: Routes = [
  { path: '',
  component:LayoutComponent,
    children:[
      {
        path:'',
        component: BlogComponent
      },
      {
       path:'blog-gallery-post',
       component: BlogGalleryPostComponent
      },
      {
        path:'blog-sidebar',
        component:BlogSidebarComponent
      },
      {
        path:'blog-details',
        component:BlogDetailComponent
      },
      {
        path:'blog-standard-post',
        component:BlogStandardPostComponent
      },
      {
        path:'blog-slider-post',
        component:BlogSidebarComponent
      },
      {
        path:'blog-gallery-post',
        component:BlogGalleryPostComponent
      },
      {
        path:'blog-youtube-post',
        component:BlogYoutubePostComponent
      },
      {
        path:'blog-vimeo-post',
        component:BlogVimeoPostComponent
      },
      {
        path:'blog-audio-post',
        component:BlogAudioPostComponent
      },
      {
        path:'blog-blockquote-post',
        component:BlogBlockquotePostComponent
      },
      {
        path:'blog-left-sidebar-post',
        component:BlogLeftSidebarPostComponent
      }


    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
