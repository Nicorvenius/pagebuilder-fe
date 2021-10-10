import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EditModule } from "@app/admin/edit/edit.module";
import { CommonModule as PGCommonModule } from './common/common.module'

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    EditModule,
    PGCommonModule
  ]
})
export class AdminModule { }
