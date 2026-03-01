import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { confirmPasswordValidator } from '../../../validators/custom-password-valid';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register',
  imports: [InputGroupModule, InputNumberModule, InputTextModule,FormsModule,ReactiveFormsModule,
    ButtonModule, MessageModule,
     MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './register.html',
  styleUrl: './register.scss',
  providers: [MessageService]

})
export class Register implements OnInit {
  name!: FormControl;
  email!: FormControl;
  password!:FormControl;
  rePassword!:FormControl;
  registerainForm!:FormGroup;
  hide:boolean = true;
  constructor(private fb:FormBuilder){
    
  }
      private messageService = inject(MessageService);

  ngOnInit(): void {
    this.initFormControl();
    this.initFormGroup();
  }
  initFormControl(){
    this.name=this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]);
     this.email=this.fb.control('',[Validators.required]);
     this.password=this.fb.control('',[Validators.required]);
     this.rePassword=this.fb.control('',[Validators.required]);
  }
  initFormGroup(){
     this.registerainForm=this.fb.group({
     name:this.name,
     email:this.email,
     password: this.password,
     rePassword:this.rePassword
     },{validator:[confirmPasswordValidator]})
  }
  registerForm(){
    console.log(this.registerainForm.value)
  }

  //  generic method to get control
 getControl(controlName: string){
  return this.registerainForm.get(controlName);
 }
 showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }
}
