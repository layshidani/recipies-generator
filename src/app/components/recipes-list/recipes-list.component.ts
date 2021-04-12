import { Component, OnInit } from '@angular/core'
import { RecipesService } from '../../services/recipes.service'

@Component({
  selector: 'app-card-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  constructor(
    private recipesService: RecipesService
  ) { }

  public recipes: any[]

  ngOnInit(): void {
    this.recipesService.getRecipesQuantity(10)
      .subscribe(data => {
        this.recipes = data
      })
  }

}
