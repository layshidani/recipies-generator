import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { RecipesListComponent } from './components/recipes-list/recipes-list.component'

const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: "list", component: RecipesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
