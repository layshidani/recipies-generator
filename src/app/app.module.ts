import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RecipesCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeRandomComponent } from './components/recipe-random/recipe-random.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesListComponent,
    RecipesCardComponent,
    RecipeRandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
