import { NgModule } from '@angular/core';
import { CommonModule as AngularModule } from '@angular/common';
import {SelectModule} from "@app/admin/common/select/select.module";
import {HeaderAdminModule} from "@app/admin/common/header-admin/header-admin.module";



@NgModule({
  declarations: [],
  imports: [
    AngularModule,
    SelectModule,
    HeaderAdminModule
  ]
})
export class CommonModule { }
