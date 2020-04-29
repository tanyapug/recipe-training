import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeItem } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeItem>();
  recipes: RecipeItem[] = [
    new RecipeItem('Zuppa Toscana', 'This is a Fabulous Soup', 'https://cafedelites.com/wp-content/uploads/2018/12/Zuppa-Toscana-Recipe-IMAGE-4.jpg'),
    new RecipeItem('Eggplant Parmesan', 'Love me some Eggplant Parm', 'https://thestayathomechef.com/wp-content/uploads/2018/07/Eggplant-Parmesan-3-small-1.jpg'),
    new RecipeItem('Chicken Cordon Bleu', 'For the French in you', 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/97867.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: RecipeItem) {
    this.recipeWasSelected.emit(recipe);
  }
}
