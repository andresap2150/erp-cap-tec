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
  public visibilidadVClasi = false;
  public visibilidadEvaluate = false;
  public visibilidadVEval = false; 
  public visibilidadMckinsey = false; 
  public visibilidadVMkEval = false;
  public visibilidadCcontrato = false;
  public visibilidadVContratos = false;
  public visibilidadCpatentes = false;
  public visibilidadLpatentes = false;
  public visibilidadCformatos = false;
  public visibilidadLformatos = false;
  

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  	this.user$ = this.auth.user$;
  }

  barraNavegacionListener($event){
  	if($event === 'capturaactivo'){
      this.visibilidadCapture = true;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
  	}
    if($event === 'clasificaactivo'){      
      this.visibilidadCapture = false;
      this.visibilidadClassify = true;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
     if($event === 'verClasificacion'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = true;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'evaluaactivo'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = true;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'verEvaluacion'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = true;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'evaluamckinsey'){      
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = true;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'verMkEvaluacion'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = true;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'cargacontrato'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = true;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'vercontratos'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = true;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'crearpatentes'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = true;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'listarpatentes'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = true;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = false;
    }
    if($event === 'cargarformatos'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = true;
      this.visibilidadLformatos = false;
    }
    if($event === 'listarformatos'){
      this.visibilidadCapture = false;
      this.visibilidadClassify = false;
      this.visibilidadVClasi = false;
      this.visibilidadEvaluate = false;
      this.visibilidadVEval = false;
      this.visibilidadMckinsey = false;
      this.visibilidadVMkEval = false;
      this.visibilidadCcontrato = false;
      this.visibilidadVContratos = false;
      this.visibilidadCpatentes = false;
      this.visibilidadLpatentes = false;
      this.visibilidadCformatos = false;
      this.visibilidadLformatos = true;
    }
  }
}