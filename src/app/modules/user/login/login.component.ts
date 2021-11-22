import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public hide = true;

  constructor(private authService : AuthService, private fb: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  public login() {
    this.checkFormValidity(()=> {
      this.authService.loginF(this.loginForm.value);      
    });
  }

  public signUp() {

    this.checkFormValidity(()=> {
      this.authService.signUpF(this.loginForm.value);
    });
  }

  private checkFormValidity(cb) {
    if (this.loginForm.valid) {
      cb();
    } else {
      //this.errorMessages$.next("Please enter correct Email and Password value");
      //console.log("debe ingresar un mail y password correcto")
      this.toastr.success('La validacion de email y/o contraseña es incorrecta', 'Revise e ingrese nuevamente sus credenciales!');
    }
  }     

  public getErrorMessage(controlName: string, errorName: string): string {
    const control = this.loginForm.get(controlName);
    let errorMessage = "";
    if(control != null){
      if (control.hasError("required"))
        errorMessage = "Debe ingresar un valor";
      if(control.hasError("min"))
        errorMessage += `No es un ${errorName} válido`
    }
    return errorMessage;
  }
}
