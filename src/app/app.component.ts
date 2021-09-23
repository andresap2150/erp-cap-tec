import { Component } from '@angular/core';
/*import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }*/

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
  //title = 'erp-cap-tec';
  /*private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item | undefined>;
  constructor(private afs: AngularFirestore){
  	this.itemDoc = afs.doc<Item>('items/1');
  	this.item = this.itemDoc.valueChanges();
  }*/
}
