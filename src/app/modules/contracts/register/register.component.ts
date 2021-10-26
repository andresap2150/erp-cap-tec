import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nombreCol : [''],
      cargoCol : [''],
      tipoIdCol : [''],
      idCol: [''],
      filepath : [''],
      clausulaProte : ['']
    })
  }

  upload(event) {    
    this.contractFPath = event.target.files[0]
  }

  uploadCont(){
    this.cs.uploadContract(this.contractFPath);
  }

  saveContractOnDb(){
    console.log("se va a guardar");
    this.uploadCont();
    this.cs.addContract(this.contratoForm.value);    
  }

}
