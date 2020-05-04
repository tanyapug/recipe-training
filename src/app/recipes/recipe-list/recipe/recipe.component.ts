import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { RecipeItem } from '../../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: RecipeItem;


  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }
  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
