import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is:</h2>
    `
})

export class AppComponent { 
  title = 'Title binding';

}
