import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { RePasswordComponent } from './re-password/re-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';

const routes: Routes = [
  { path: 'auth-login', component: LoginComponent },
  { path: 'auth-signup', component: SignupComponent },
  { path: 'reset-password', component: RePasswordComponent },
  { path: 'lock-screen', component: LockScreenComponent }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
