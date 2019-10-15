import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
      new Recipe('a test recipe' , 'desc test ' , 'https://secure.i.telegraph.co.uk/multimedia/archive/01487/mika_1487779c.jpg'),
      new Recipe('a test recipe' , 'desc test ' , 'https://secure.i.telegraph.co.uk/multimedia/archive/01487/mika_1487779c.jpg')
      
    ];
}