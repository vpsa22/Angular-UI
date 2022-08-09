import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //  {
  //    path: '',  redirectTo: '/landing', pathMatch:'full'
  //  },
  //  {
  //    path: 'landing',     
  //    loadChildren : () => import ('src/app/core/components/landing/landing.module').then(m => m.LandingModule)    
  //  } ,     
  // {
  //   path: 'login',
  //   redirectTo: '/creator/login'
  // },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    //component:LandingComponent,
    loadChildren : () => import ('src/app/core/components/landing/landing.module').then(m => m.LandingModule)    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
