import { Component, OnInit } from '@angular/core';
import { PageService } from "@app/services/page.service";
import { Component as ComponentPrototypes } from "@share/dto/component.dto";

export interface DynamicContentInputs { [k: string]: any; }

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss']
})
export class LoadPageComponent implements OnInit {

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

  componentPrototypes: ComponentPrototypes[] = [];

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.pageService
      .getPageComponents('')
      .subscribe((components) => this.componentPrototypes = components)
  }

}
