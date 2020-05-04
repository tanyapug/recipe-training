import { Component, OnInit, Input } from '@angular/core';
import { RecipeItem } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeItem;
  ingredients: Ingredient[];

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
  }
  sendToShoppingList(ingredients: Ingredient[]) {
    // for (let i = 0; i < ingredients.length; i++) {
    //   this.shoppingListService.addIngredient(ingredients[i]);
    // }
    this.shoppingListService.addMultipleIngredients(ingredients);
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
