import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumsComponent } from './forums.component';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { ForumTopicComponent } from './forum-topic/forum-topic.component';
import { ForumCommentsComponent } from './forum-comments/forum-comments.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children:
    [
      {
        path:'forums-topic',
        component:ForumTopicComponent
      },
      {
        path:'forums-comments',
        component:ForumCommentsComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
