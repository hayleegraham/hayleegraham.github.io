import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { HomeLoggedInComponent } from './components/home-logged-in/home-logged-in.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeLoggedInComponent },
  { path: 'recipes', component: AllRecipesComponent },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'add', component: AddRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
