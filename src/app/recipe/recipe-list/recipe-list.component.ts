import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Test Recipe', 'This is a test recipe', 'https://ricebychoice.com/storage/images/products/ao25MV4Ej1Dbm9zmRKihgdtxY9pTuwEjgWdLZQNM.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
