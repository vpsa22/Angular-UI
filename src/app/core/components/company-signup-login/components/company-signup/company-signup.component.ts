import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.scss']
})
export class CompanySignupComponent implements OnInit {
  //company_mode ='Company Signup';
  constructor() { }

  ngOnInit(): void { 
  //this.commonService.companymode = 'Company Signup';  
 // alert("signup = "+this.commonService.companymode);
  //this.router.navigate(['/company-login']);
  
  }

}
