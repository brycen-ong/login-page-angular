import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from'./services/auth.guard';
import { HomeComponent } from'./components/home/home.component';
import { DashboardComponent } from'./components/dashboard/dashboard.component';
import { SignInComponent } from'./components/sign-in/sign-in.component';
import { SignUpComponent } from'./components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
