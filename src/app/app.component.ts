import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <div class="appress-pwa-note">
    <app-header></app-header>
    <div class="main"> 
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  </div>
  `,
  //styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
