import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

export interface DynamicContentInputs { [k: string]: any; }

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss']
})
export class LoadPageComponent implements OnInit {
  @ViewChild("container", { read: ViewContainerRef, static: true })// @ts-ignore
  private container: ViewContainerRef;

  public readonly response = [
    {
      component: 'app-button'
    },
    {
      component: 'app-button'
    },
    {
      component: 'app-button'
    },
    {
      component: 'app-button'
    },
    {
      component: 'app-button'
    }
  ]

  constructor() {}

  ngOnInit(): void {}

  getModuleLoader() {
    return () =>
      import("@share/components/components.module").then(m => m.ComponentsModule)
  }

  addComponentInputs(componentRef: ComponentRef<unknown>, inputs: DynamicContentInputs) {
    if (componentRef && componentRef.instance && inputs) {
      // @ts-ignore
      Object.keys(inputs).forEach(p => (componentRef.instance[p] = inputs[p]));
    }
  }

}
