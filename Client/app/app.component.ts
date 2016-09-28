import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is:</h2>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero.id}}: {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 2">There are more than 2 heroes!</p>
    `
})

export class AppComponent { 
  title: string;
  heroes = [
    new Hero(1, 'batman'),
    new Hero(2,'superman'),
    new Hero(3,'roaddog')
    ];
  constructor(){
   this.title = 'Title binding';
   
  }
 


}
