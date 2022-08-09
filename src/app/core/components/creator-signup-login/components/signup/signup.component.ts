import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/common/interface/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public creatorSignupForm!: FormGroup;
  private user: User = new User;
  signupError = '';

  readonly unexpectedErrorMsg = 'Unexpected error occurred - please try again';
  readonly backendApiConnectionErrorMsg = 'Unable to connect to totazi Server - please try again';
  constructor() { }

  ngOnInit(): void {
    this.creatorSignupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),     
      email: new FormControl('', [Validators.required, Validators.maxLength(60)]),     
      password: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.creatorSignupForm.controls[controlName].hasError(errorName);
  }
  public loginSubmit(creatorLoginFormValue: any) {  

    
   }
}
