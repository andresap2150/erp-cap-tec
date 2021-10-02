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
     this.authService.loginF(this.loginForm.value);
   }     
}
