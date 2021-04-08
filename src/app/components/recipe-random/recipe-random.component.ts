import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'

@Component({
  selector: 'app-recipe-random',
  templateUrl: './recipe-random.component.html',
  styleUrls: ['./recipe-random.component.scss']
})
export class RecipeRandomComponent implements OnInit {
  @Input()
  recipe: any;

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this.recipe = this.recipesService.getRecipeById(1);
  }

  protected randomRecipe() {
    console.warn('getRecipeById');

    this.recipe = this.recipesService.getRandomRecipe();
  }
}
