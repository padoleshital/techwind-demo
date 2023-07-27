import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsComponent } from './forums.component';
import { ForumTopicComponent } from './forum-topic/forum-topic.component';
import { ForumCommentsComponent } from './forum-comments/forum-comments.component';


@NgModule({
  declarations: [
    ForumsComponent,
    ForumTopicComponent,
    ForumCommentsComponent
  ],
  imports: [
    CommonModule,
    ForumsRoutingModule
  ]
})
export class ForumsModule { }
