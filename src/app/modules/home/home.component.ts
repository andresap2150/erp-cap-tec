import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  isRoleAdmin(){
  	return this.auth.user$.subscribe(u =>u.rol==="4")  
  }

}
