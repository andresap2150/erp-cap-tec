import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService, User } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$: Subject<User>;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.auth.user$;
  }

  public mostrarVista(button){
  	this.messageEvent.emit(button);
  }

}
