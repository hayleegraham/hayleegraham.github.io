import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss',
})
export class AllRecipesComponent implements OnInit {
  recipes?: Recipe[];
  currentRecipe?: Recipe;
  currentIndex = -1;
  title = '';

  constructor(private recipeService: RecipeService, private router: Router) {
    this.router.events.subscribe((route) => {
      if (router.url == '/recipes') {
        this.currentRecipe = undefined;
      }
    });
  }

  ngOnInit(): void {
    this.retrieveRecipes();
  }

  refreshList(): void {
    this.currentRecipe = undefined;
    this.currentIndex = -1;
    this.retrieveRecipes();
  }

  retrieveRecipes(): void {
    this.recipeService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.recipes = data;
      });
  }

  setActiveRecipe(recipe: Recipe, index: number): void {
    this.currentRecipe = recipe;
    this.currentIndex = index;
  }
}
