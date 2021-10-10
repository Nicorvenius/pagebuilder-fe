import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { SelectModule } from "@app/admin/common/select/select.module";

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    SelectModule
  ]
})
export class PageModule { }
