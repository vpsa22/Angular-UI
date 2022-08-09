import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  public 'submitInfoForm': FormGroup ;
  constructor(private router: Router) { }


  ngOnInit(): void {
    this.submitInfoForm = new FormGroup({

    });
  }
  onSubmit(): void { 
    // this.cartService.APICallMethod(ApiEndPoint.PRODUCT_INFO, ApiMethod.GET, '').subscribe(res => {
    //   console.log(res);
    // });

  }
}
