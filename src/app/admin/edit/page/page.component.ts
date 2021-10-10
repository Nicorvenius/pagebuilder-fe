import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  selectedPages: string = '';

  items = [
    {
      label: 'Home',
      value: 'home'
    },
    {
      label: 'About',
      value: 'about'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedPages)
  }

  log(event: any){
    console.log(event)
  }
}
