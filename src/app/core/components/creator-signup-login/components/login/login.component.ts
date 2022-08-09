import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Location } from '@angular/common';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiEndPoint, ApiMethod } from 'src/app/common/constants/constants';
import { User } from 'src/app/common/interface/user.model';
import { CreatorService } from 'src/app/service/creator.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public creatorLoginForm!: FormGroup;
  private user: User = new User;
  loginError = '';

  readonly notFound = 'Not Found';
  readonly internalServerError = 'Internal Server Error';
  readonly unauthorizedAccessErrorCode = 'NOT_AUTHORIZED_TO_LOGIN';
  readonly invalidCredentialsErrorMsg = 'Invalid email or password.';
  readonly unexpectedErrorMsg = 'Unexpected error occurred - please try again';
  readonly backendApiConnectionErrorMsg = 'Unable to connect to totazi Server - please try again';

  // password!: string;
  // email!: string;
  constructor(private location:Location ,private creatorService: CreatorService, private router:Router) { }

  ngOnInit(): void {
    this.creatorLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(60)]),     
      password: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.creatorLoginForm.controls[controlName].hasError(errorName);
  }
 
  public loginSubmit(creatorLoginFormValue: any) {   
    if (this.creatorLoginForm.valid) {      
    const params = new HttpParams().set('emailAddress', creatorLoginFormValue.email).set('password',creatorLoginFormValue.password).set('type','Creator');    
  //  const params:string='?emailId=abc@hotmail.com&password=123';
  
    this.creatorService.getUserAPI(          
      ApiEndPoint.TEST_API,
      ApiMethod.GET,
      null,
      params
      ).subscribe((data :User) => {                
        if(data.emailAddress .length > 0){
            this.router.navigate(['/company-details']); 
          }
       },
      (error) =>this.handleLoginError(error));       
      } 
    }

  
  private handleLoginError(error: HttpErrorResponse) {
    let errorMessage = this.unexpectedErrorMsg;
    if(error.error instanceof Error) {
      console.error('Authentication Error: ', error);
    }
    if(error.status && [404, 504, 400].includes(error.status)) {
      if(404 === error.status) {
        errorMessage = this.invalidCredentialsErrorMsg;
      }
      if(504 === error.status) {
        errorMessage = this.backendApiConnectionErrorMsg;
      }
      if(400 === error.status) {
        errorMessage = this.invalidCredentialsErrorMsg;
      }

      // else if(400 === error.status && error.error['errorCode'] === this.unauthorizedAccessErrorCode) {
      //   errorMessage = error.error['errorMessage'];
      // }    
    }  else{
      errorMessage = this.internalServerError;
    }

    this.loginError = errorMessage;
  }

}
