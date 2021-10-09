import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderAdminModule } from "./common/header-admin/header-admin.module";
import { EditModule } from "@app/admin/edit/edit.module";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    EditModule,
    HeaderAdminModule,
  ]
})
export class AdminModule { }
