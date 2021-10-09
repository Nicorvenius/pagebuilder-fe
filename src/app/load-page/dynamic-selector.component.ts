import { ComponentRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { DynamicComponentService } from '@app/services/dynamic-component.service';

export interface DynamicComponentInputs { [k: string]: any; }

@Component({
  selector: 'app-dynamic-selector',
  template: `
  <ng-container #componentContainer></ng-container>
  `
})
export class DynamicSelectorComponent implements OnDestroy, OnChanges {
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true })//@ts-ignore
  container: ViewContainerRef;

  @Input() componentSelector: string = '';
  // @ts-ignore
  @Input() moduleLoaderFunction;
  @Input() inputs: DynamicComponentInputs = [];

  // @ts-ignore
  public component: ComponentRef<any>;

  constructor(private componentService: DynamicComponentService) { }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.componentSelector) {
      await this.renderComponentInstance();
      this.setComponentInputs();
    } else if (changes.inputs) {
      this.setComponentInputs();
    }
  }

  ngOnDestroy() {
    this.destroyComponentInstance();
  }

  private async renderComponentInstance() {
    this.destroyComponentInstance();

    this.component = await this.componentService.getComponentBySelector(this.componentSelector, this.moduleLoaderFunction);
    this.container.insert(this.component.hostView);
  }

  private setComponentInputs() {
    if (this.component && this.component.instance && this.inputs) {
      Object.keys(this.inputs).forEach(p => (this.component.instance[p] = this.inputs[p]));
    }
  }

  private destroyComponentInstance() {
    if (this.component) {
      this.component.destroy();
      // @ts-ignore
      this.component = null;
    }
  }
}
