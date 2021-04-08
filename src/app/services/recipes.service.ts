import { Injectable } from '@angular/core';

import * as data from '../../../data/afrodite.json';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes = data['default'];

  constructor() { }

  public getAllRecipes(): [] {
    return this.recipes.slice(0, 10);
  }

  public getRecipesQuantity(quantity: number): [] {
    return this.recipes.slice(0, quantity);
  }

  public getRecipeById(id: number): [] {
    return this.recipes[id];
  }

  public getRandomRecipe() {
    const id = Array.isArray(this.recipes) ? Math.floor(Math.random() * this.recipes.length) : 0;

    return this.getRecipeById(id);
  }
}
