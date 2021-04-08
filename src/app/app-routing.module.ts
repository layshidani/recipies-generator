import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'

import { RecipeRandomComponent } from './components/recipe-random/recipe-random.component'
import { RecipesListComponent } from './components/recipes-list/recipes-list.component'

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'list', component: RecipesListComponent },
  { path: 'random', component: RecipeRandomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
