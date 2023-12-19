import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detailed',
  templateUrl: './recipe-detailed.component.html',
  styleUrl: './recipe-detailed.component.scss',
})
export class RecipeDetailedComponent implements OnInit {
  @Input() recipe?: Recipe;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentRecipe: Recipe = {
    title: '',
    link: '',
    servings: '',
    time: '',
    rating: 0,
    image: '',
    category: '',
    ingredients: '',
    instructions: '',
    notes: '',
    ingredientsArr: [],
  };
  message = '';
  editForm = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    const ingredientsArr = this.recipe?.ingredients?.split(',');
    this.message = '';
    this.currentRecipe = { ...this.recipe, ingredientsArr };
  }
  editRecipe(): void {
    this.editForm = true;
  }
  updateRecipe(): void {
    const data = {
      title: this.currentRecipe.title,
      link: this.currentRecipe.link,
      servings: this.currentRecipe.servings,
      time: this.currentRecipe.time,
      rating: this.currentRecipe.rating,
      image: this.currentRecipe.image,
      category: this.currentRecipe.category,
      ingredients: this.currentRecipe.ingredients,
      instructions: this.currentRecipe.instructions,
      notes: this.currentRecipe.notes,
    };

    if (this.currentRecipe.id) {
      this.recipeService
        .update(this.currentRecipe.id, data)
        .then(() => (this.message = 'Your recipe was updated successfully!'))
        .catch((err) => console.log(err));
    }
  }

  deleteRecipe(): void {
    if (this.currentRecipe.id) {
      this.recipeService
        .delete(this.currentRecipe.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The recipe was successfully deleted.';
        })
        .catch((err) => console.log(err));
    }
  }
}
