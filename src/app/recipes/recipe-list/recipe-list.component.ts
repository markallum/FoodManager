import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test.',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
    ),
    new Recipe(
      'A Test Recipe Too!',
      'This is simply a test. A better one',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
    )
  ];

  @Output() recipeSelect = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedRecipe: Recipe) {
    this.recipeSelect.emit(selectedRecipe);
  }

}
