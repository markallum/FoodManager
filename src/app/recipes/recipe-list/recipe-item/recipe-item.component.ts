import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesComponent } from '../../recipes.component';
import { RecipeListComponent } from '../recipe-list.component';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelect = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeSelect.emit();
  }

}
