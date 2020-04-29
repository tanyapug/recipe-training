import { Component, OnInit } from '@angular/core';
import { RecipeItem } from '../recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: RecipeItem;

  constructor() { }

  ngOnInit(): void {
  }

}
