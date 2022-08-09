import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-company-signup-login',
  templateUrl: './company-signup-login.component.html',
  styleUrls: ['./company-signup-login.component.scss']
})
export class CompanySignupLoginComponent implements OnInit {
  company_mode ="";
  previousUrl ='';
  constructor(private router:Router , private commonService: CommonService) {
   this.company_mode = this.commonService.companymode;   
   }

  ngOnInit(): void {
 //  alert("nav= "+  this.router.url);
   if( this.router.url.indexOf("company-signup") >=0) 
    this.commonService.companymode ="Company Signup"; 
    else  
      this.commonService.companymode ="Company Login"; 
    this.company_mode =this.commonService.companymode;
  //  alert("main +"+ this.company_mode );
  }

}
