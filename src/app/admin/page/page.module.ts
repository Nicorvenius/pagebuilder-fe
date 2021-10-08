import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import {EditModule} from "./edit/edit.module";



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    EditModule
  ]
})
export class PageModule { }
