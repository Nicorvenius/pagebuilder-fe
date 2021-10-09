import { ComponentFactoryResolver, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseModule } from "@share/classes/base-module";
import { ButtonModule } from "@share/components/button/button.module";
import { componentsList } from "./components-list";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
})
export class ComponentsModule extends BaseModule {
  dynamicComponents = componentsList;

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
