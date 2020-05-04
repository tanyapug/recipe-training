import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShoppingListService, RecipesService]
})
export class AppComponent {
  title = "my-recipe-app";
  loadedFeature = 'recipes';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
