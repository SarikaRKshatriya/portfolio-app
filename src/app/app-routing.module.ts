import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  { path: 'landingPage',pathMatch: 'full', component: LandingPageComponent },
  { path: 'signin', pathMatch: 'full', component: SignInComponent },
  { path: 'userinfo', pathMatch: 'full', component: UserInfoComponent },
  { path: 'edit', pathMatch: 'full', component: EditInfoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {enableTracing: false, useHash: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
