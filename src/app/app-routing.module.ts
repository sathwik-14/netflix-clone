import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { LandingPageComponent } from './components/landingpage/landing-page.component';

const routes: Routes = [
  {path: '', title: 'Netflix Inida-Watch TV Show', component: LandingPageComponent},
  {path: 'signin',title: 'Netflix', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
