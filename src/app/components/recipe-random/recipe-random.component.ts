import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-random',
  templateUrl: './recipe-random.component.html',
  styleUrls: ['./recipe-random.component.scss']
})
export class RecipeRandomComponent implements OnInit {
  @Input()
  recipe: any;

  constructor(
  ) { }

  ngOnInit(): void {  }

}
