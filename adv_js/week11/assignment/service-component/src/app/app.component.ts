import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: 
    `<h1>{{title}}</h1>
    <sports-teams></sports-teams>`,
  providers: [DataService]
})
export class AppComponent {
  title = 'My Second Angular App';  
}
