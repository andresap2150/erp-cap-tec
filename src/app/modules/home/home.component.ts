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
  public visibilidadClassify = false;
  public visibilidadEvaluate = false;
  public visibilidadMckinsey = false;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  	this.user$ = this.auth.user$;
  }

  barraNavegacionListener($event){
  	if($event === 'capturaactivo'){
  		this.visibilidadCapture = true;
      this.visibilidadClassify = false;
      this.visibilidadEvaluate = false;
      this.visibilidadMckinsey = false;
  	}
    if($event === 'clasificaactivo'){      
      this.visibilidadCapture = false;
      this.visibilidadClassify = true;
      this.visibilidadEvaluate = false;
      this.visibilidadMckinsey = false;
    }
    if($event == 'evaluaactivo'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadEvaluate = true;
      this.visibilidadMckinsey = false;
    }
    if($event == 'evaluamckinsey'){      
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadEvaluate = false;
      this.visibilidadMckinsey = true;
    }
  }
}
