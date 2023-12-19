import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  NgModel,
} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  recipe: Recipe = new Recipe();
  submitted = false;
  form: FormGroup;
  categoryList: any = [
    { id: 1, name: 'Chicken' },
    { id: 2, name: 'Beef' },
    { id: 3, name: 'Seafood' },
    { id: 4, name: 'Soups/Stews' },
    { id: 5, name: 'Casseroles' },
    { id: 6, name: 'Pastas' },
    { id: 7, name: 'Salads' },
    { id: 8, name: 'Desserts' },
    { id: 9, name: 'Stir-Fry' },
    { id: 10, name: 'Snacks' },
    { id: 11, name: 'Sides' },
    { id: 12, name: 'Other' },
  ];

  constructor(
    private recipeService: RecipeService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      category: this.formBuilder.array([]),
    });
  }

  onCheckboxChange(e: { target: { checked: any; value: any } }) {
    const category: FormArray = this.form.get('category') as FormArray;

    if (e.target.checked) {
      category.push(new FormControl(e.target.value));
    } else {
      const index = category.controls.findIndex(
        (x) => x.value === e.target.value
      );
      category.removeAt(index);
    }
  }

  dateObj = new Date();
  day = this.dateObj.getDate().toString();
  month = (this.dateObj.getMonth() + 1).toString();
  year = this.dateObj.getFullYear().toString();
  dateArr = [this.month, this.day, this.year];
  date = this.dateArr.join('-');

  saveRecipe(): void {
    const categoryArr = this.form.value.category;
    const category = categoryArr.toString(' , ');
    this.recipe.category = category;
    this.recipe.date = this.date;
    console.log(this.recipe.ingredients?.replace(/\n/g, ','));
    this.recipe.ingredients = this.recipe.ingredients?.replace(/\n/g, ',');
    console.log(this.recipe.ingredients);
    this.recipeService.create(this.recipe).then(() => {
      console.log('Created new recipe successfully!');
      this.submitted = true;
    });
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = new Recipe();
  }
}
