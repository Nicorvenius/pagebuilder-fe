import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadPageComponent } from './load-page.component';
import { DynamicSelectorComponent } from "./dynamic-selector.component";
import {ButtonModule} from "@share/components/button/button.module";


@NgModule({
  declarations: [
    LoadPageComponent,
    DynamicSelectorComponent
  ],
  exports: [DynamicSelectorComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ]
})
export class LoadPageModule { }
