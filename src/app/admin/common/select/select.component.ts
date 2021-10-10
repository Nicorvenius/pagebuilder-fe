import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() items: any[] = [];

  @Input() title: string = '';

  @Output() selectionChange = new EventEmitter<string>();

  selectedValue: string = '';


}
