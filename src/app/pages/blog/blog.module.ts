import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogAudioPostComponent } from './blog-audio-post/blog-audio-post.component';
import { BlogBlockquotePostComponent } from './blog-blockquote-post/blog-blockquote-post.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogStandardPostComponent } from './blog-standard-post/blog-standard-post.component';
import { BlogYoutubePostComponent } from './blog-youtube-post/blog-youtube-post.component';
import { BlogVimeoPostComponent } from './blog-vimeo-post/blog-vimeo-post.component';
import { BlogGalleryPostComponent } from './blog-gallery-post/blog-gallery-post.component';
import { BlogLeftSidebarPostComponent } from './blog-left-sidebar-post/blog-left-sidebar-post.component';
@NgModule({
  declarations: [
    BlogComponent,
    BlogSidebarComponent,
    BlogAudioPostComponent,
    BlogBlockquotePostComponent,
    BlogDetailComponent,
    BlogStandardPostComponent,
    BlogYoutubePostComponent,
    BlogVimeoPostComponent,
    BlogGalleryPostComponent,
    BlogLeftSidebarPostComponent,
    
    
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
