import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipesCardComponent implements OnInit {

  @Input()
  content: any;

  constructor() { }

  ngOnInit(): void {

  }

}
