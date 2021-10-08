import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderAdminModule } from "./common/header-admin/header-admin.module";
import { PageModule } from "./page/page.module";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    PageModule,
    HeaderAdminModule,
  ]
})
export class AdminModule { }
