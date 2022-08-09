import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creator-signup-login',
  templateUrl: './creator-signup-login.component.html',
  styleUrls: ['./creator-signup-login.component.css']
})
export class CreatorSignupLoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      // username: new FormControl(),
      // password: new FormControl()
    });
  }

}
