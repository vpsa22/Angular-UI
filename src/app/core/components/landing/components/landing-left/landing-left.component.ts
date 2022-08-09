import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-left',
  templateUrl: './landing-left.component.html',
  styleUrls: ['./landing-left.component.css']
})
export class LandingLeftComponent implements OnInit {
  landingLeftForm!: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.landingLeftForm= new FormGroup({
      
    });
  }

  onSignUp(){     
    this.router.navigate(['/company-login']);
  }

}
