import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', title: 'Netflix India-Watch TV Show', loadComponent:()=>import('./components/landingpage/landing-page.component').then(e=>e.LandingPageComponent)},
  {path: '/signin',title: 'Netflix', loadComponent:()=> import('./components/signin/signin.component').then(e=>e.SigninComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
