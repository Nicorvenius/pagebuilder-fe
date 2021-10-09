import {ComponentFactory, ComponentFactoryResolver, Type} from "@angular/core";

export abstract class BaseModule {
  // @ts-ignore
  private selectorToFactoryMap: { [key: string]: ComponentFactory<any> } = null;
  protected abstract dynamicComponents: Type<any>[]; // similar to entryComponents

  protected constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  public getComponentFactory(selector: string): ComponentFactory<any> {
    if (!this.selectorToFactoryMap) {
      this.populateRegistry();
    }
    return this.selectorToFactoryMap[selector];
  }

  private populateRegistry() {
    this.selectorToFactoryMap = {};
    if (
      Array.isArray(this.dynamicComponents) &&
      this.dynamicComponents.length > 0
    ) {
      this.dynamicComponents.forEach(compType => {
        const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(compType);
        this.selectorToFactoryMap[componentFactory.selector] = componentFactory;
      });
    }
  }
}
