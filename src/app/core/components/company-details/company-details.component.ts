import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
 // comanyDetailsForm!: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.comanyDetailsForm = new FormGroup({
      
    // });
  }
  onSubmit() { }

  routeToDetails(){   
    this.router.navigate(['/company-details']);
  }

  routeToReview(){ 
    this.router.navigate(['/review']); 
    // console.log("res");

  }
};
