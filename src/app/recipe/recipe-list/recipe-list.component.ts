import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selectedRecipe?: Recipe;
  numeroIngredientes: number = 0;

  constructor(private recipeService: RecipeService, private router: Router) {}

  contarIngredientes(recipe: Recipe) {
    recipe.numeroIngredientes = 0;
    for (const element of recipe.ingredientes) {
        recipe.numeroIngredientes += 1;
      }
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      for (const element of this.recipes) {
        this.contarIngredientes(element);
      }
    });
  }

  ngOnInit() {
    this.getRecipes();
  }

  onSelect(recipe: Recipe) {
    this.router.navigate(['/recipe', recipe.id]);
  }
}
