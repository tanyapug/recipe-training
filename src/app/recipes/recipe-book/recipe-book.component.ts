import { Component, OnInit } from '@angular/core';
import { RecipeItem } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipesService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: RecipeItem;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.recipeSelected.subscribe(
      (recipe: RecipeItem) => {
        this.selectedRecipe = recipe;
      })
  }
}
