import { Injectable, EventEmitter } from '@angular/core';
import { RecipeItem } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<RecipeItem>();
  private recipes: RecipeItem[] = [
    new RecipeItem('Zuppa Toscana', 'This is a Fabulous Soup', 'https://cafedelites.com/wp-content/uploads/2018/12/Zuppa-Toscana-Recipe-IMAGE-4.jpg'),
    new RecipeItem('Eggplant Parmesan', 'Love me some Eggplant Parm', 'https://thestayathomechef.com/wp-content/uploads/2018/07/Eggplant-Parmesan-3-small-1.jpg'),
    new RecipeItem('Chicken Cordon Bleu', 'For the French in you', 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/97867.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
