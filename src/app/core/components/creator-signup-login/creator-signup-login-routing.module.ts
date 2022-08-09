import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  // {
  //   path: '',  component: CreatorSignupLoginComponent
  // },

  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'signUp',
  //   component: SignupComponent
  //   // redirectTo: '/creator/signup'
  // },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CreatorSignupLoginRoutingModule { }
