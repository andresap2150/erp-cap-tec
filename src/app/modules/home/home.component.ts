import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { AuthService } from '../core/auth.service';
import { Subject} from 'rxjs';
import { User } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user$: Subject<User>;
  public visibilidadCapture = false;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  	this.user$ = this.auth.user$;
  }

  barraNavegacionListener($event){
  	if($event === 'capturaactivo'){
  		console.log("voy a mostrar el capture");
  		this.visibilidadCapture = true;
  	}
    if($event === 'lista-patentes'){
  		console.log("voy a mostrar registro patentes");
  		this.visibilidadCapture = true;
    }
  }
}
