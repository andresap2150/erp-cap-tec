import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public hide = true;

  constructor(private authService : AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  onSubmit(formData) {
  	//console.log(formData.value);
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }

   public login() {
     //console.log(this.loginForm.value);
     this.checkFormValidity(()=> {
       this.authService.loginF(this.loginForm.value);
     });
   }

   public signUp() {
     //console.log(this.loginForm.value);
     this.checkFormValidity(()=> {
       this.authService.signUpF(this.loginForm.value);
     });
   }

   private checkFormValidity(cb) {
    if (this.loginForm.valid) {
      cb();
    } else {
      //this.errorMessages$.next("Please enter correct Email and Password value");
      console.log("debe ingresar un mail y password correcto")
    }
  }     

   public getErrorMessage(controlName: string, errorName: string): string {
    const control = this.loginForm.get(controlName);
    console.log("get error 1");
    let errorMessage = "";
    if(control != null){
      console.log("get error 2", control.errors, control.hasError("required"));
      if (control.hasError("required"))
        errorMessage = "Debe ingresar un valor";
      if(control.hasError(errorName))
        errorMessage += `No es un ${errorName} válido`
    }
    return errorMessage;
  }
}
