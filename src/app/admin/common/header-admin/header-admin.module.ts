import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    HeaderAdminComponent
  ],
  exports: [
    HeaderAdminComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class HeaderAdminModule { }
