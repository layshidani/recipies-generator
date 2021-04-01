import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
