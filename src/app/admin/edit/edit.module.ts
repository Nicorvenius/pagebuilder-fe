import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import {NavigationModule} from "@app/admin/edit/navigation/navigation.module";
import {PageModule} from "@app/admin/edit/page/page.module";



@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    PageModule
  ]
})
export class EditModule { }
