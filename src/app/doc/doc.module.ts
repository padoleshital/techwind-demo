import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { WidgetComponent } from './widget/widget.component';


@NgModule({
  declarations: [
    DocComponent,
    ChangelogComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule,
    DocRoutingModule
  ]
})
export class DocModule { }
