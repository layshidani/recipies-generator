import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { tap, map } from 'rxjs/operators'

import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public recipes
  private RECIPES_API_URL = 'https://tasty.p.rapidapi.com/recipes/list';
  private RECIPES_API_OPTIONS = {
    // params: {
    // 'from': '0',
    // 'size': '20',
    // 'tags': 'under_30_minutes'
    // },
    headers: new HttpHeaders({
      'x-rapidapi-key': '9db33897d8mshee177f0734b281cp1a4908jsn01ea1d02b356',
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'useQueryString': 'true'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  public getAllRecipes(): Observable<any[]> {
    return this.http.get(this.RECIPES_API_URL, this.RECIPES_API_OPTIONS)
      .pipe(map(
        data => this.recipes = data['results']))
  }

  public getRecipesQuantity(quantity: number): Observable<any[]> {
    const newOptions = { ...this.RECIPES_API_OPTIONS, params: { size: quantity.toString() } }

    return this.http.get(this.RECIPES_API_URL, newOptions)
      .pipe(map(
        data => this.recipes = data['results']))
  }

  public getRecipeById(id: number): Observable<any[]> {
    return this.http.get(this.RECIPES_API_URL, this.RECIPES_API_OPTIONS)
      .pipe(
        map(data => this.recipes = data['results'][id]),
        tap(data => console.warn(data, this.recipes)
        )
      )
  }

  // TODO FIX
  public getRandomRecipe(): Observable<any[]> {
    this.getAllRecipes()
      .subscribe(data => {
        this.recipes = data['results']
      })

    const id = Array.isArray(this.recipes) ? Math.floor(Math.random() * this.recipes.length) : 0

    return this.getRecipeById(id)
  }
}
