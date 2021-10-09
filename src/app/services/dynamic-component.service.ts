import {
  Compiler,
  ComponentFactory,
  ComponentRef,
  Injectable,
  Injector,
  NgModuleFactory
} from '@angular/core';
import { BaseModule } from "@share/classes/base-module";

@Injectable({
  providedIn: "root"
})
export class DynamicComponentService {
  constructor(private injector: Injector) {}

  getComponentBySelector(componentSelector: string, moduleLoaderFunction: () => Promise<any>): Promise<ComponentRef<unknown>> {
    return this.getModuleFactory(moduleLoaderFunction).then(moduleFactory => {
      const module = moduleFactory.create(this.injector);

      if (!(module.instance instanceof BaseModule)) {
        throw new Error('Module should extend BaseModule to use "string" based component selector');
      }

      const compFactory: ComponentFactory<any> = module.instance.getComponentFactory(componentSelector);
      return compFactory.create(module.injector, [], null, module);
    });
  }

  async getModuleFactory(moduleLoaderFunction: () => Promise<NgModuleFactory<any>>) {
    const ngModuleOrNgModuleFactory = await moduleLoaderFunction();

    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      return ngModuleOrNgModuleFactory;
    }

    return await this.injector
      .get(Compiler)
      .compileModuleAsync(ngModuleOrNgModuleFactory);
  }
}
