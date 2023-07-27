import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocComponent } from './doc.component';
import { CentrelayoutComponent } from '../layout/centrelayout/centrelayout.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  {
    path:'',
    component:CentrelayoutComponent,
    children:[
      { 
        path: '', component: DocComponent },
      {
        path:'changelog',component:ChangelogComponent
      },
      {
        path:'widget',component:WidgetComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocRoutingModule { }
