import {
  Compiler,
  ComponentFactory,
  ComponentRef,
  Injectable,
  Injector,
  NgModuleFactory
} from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class DynamicComponentService {
  constructor(private injector: Injector) {}

  getModuleLoader(): () => Promise<any> {
    return () =>
      import("@share/components/components.module").then(m => m.ComponentsModule)
  }

  getComponentBySelector(componentSelector: string): Promise<ComponentRef<unknown>> {
    return this.getModuleFactory(this.getModuleLoader()).then(moduleFactory => {
      const module = moduleFactory.create(this.injector);

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
