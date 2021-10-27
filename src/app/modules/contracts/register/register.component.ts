import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractsService } from './../../core/contracts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public contratoForm : FormGroup;
  public contractFPath : string;

  constructor(private cs: ContractsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contratoForm = this.fb.group({
      nombreCol : ['',Validators.required],
      cargoCol : ['',Validators.required],
      tipoIdCol : ['',Validators.required],
      idCol: ['',Validators.required],
      filepath : ['',Validators.required],
      clausulaProte : ['',Validators.required],
      vencimiento : ['', Validators.required]
    })
  }

  upload(event) {    
    this.contractFPath = event.target.files[0]
  }

  uploadCont(){
    this.cs.uploadContract(this.contractFPath);
  }

  saveContractOnDb(){
    this.checkFormValidity(this.cs.addContract(this.contratoForm.value));
    this.contratoForm.reset();
  }

  private checkFormValidity(cb) {
    if (this.contratoForm.valid) {
      cb();
    } else {
      console.log("debe ingresar todos los datos requeridos")
    }
  }
}