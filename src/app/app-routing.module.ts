import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from'./services/auth.guard';
import { HomeComponent } from'./components/home/home.component';
import { DashboardComponent } from'./components/dashboard/dashboard.component';
import { SignInComponent } from'./components/sign-in/sign-in.component';
import { SignUpComponent } from'./components/sign-up/sign-up.component';
import { ResetComponent } from './components/reset/reset.component';
import { EditComponent } from './components/edit/edit.component';

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
  },
  {
    path: 'reset',
    component: ResetComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
