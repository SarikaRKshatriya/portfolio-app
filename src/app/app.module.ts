import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { RegisterService } from './register.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    LandingPageComponent,
    UserInfoComponent,
    EditInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastyModule.forRoot(),
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
