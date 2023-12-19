import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeDetailedComponent } from './components/recipe-detailed/recipe-detailed.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { LogInModalComponent } from './components/log-in-modal/log-in-modal.component';
import { HomeLoggedInComponent } from './components/home-logged-in/home-logged-in.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    RecipeDetailedComponent,
    AllRecipesComponent,
    ShoppingListComponent,
    LogInModalComponent,
    HomeLoggedInComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
