import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from "./common/header/header.module";
import {LoadPageModule} from "./load-page/load-page.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoadPageModule,
    HeaderModule,
  ]
})
export class ComponentsModule { }
