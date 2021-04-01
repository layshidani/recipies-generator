import { Component, OnInit } from '@angular/core';

import * as data from '../../../../data/afrodite.json';

@Component({
  selector: 'app-card-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes = data['default'].slice(0, 10);

  constructor() { }

  ngOnInit(): void {

  }

}
