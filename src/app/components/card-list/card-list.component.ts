import { Component, Input, OnInit } from '@angular/core';

import * as data from '../../../../data/afrodite.json';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  public content = data['default'].slice(0, 10);

  constructor() { }

  ngOnInit(): void {

    console.warn('content', this.content);

  }

}
