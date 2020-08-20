import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from'@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ResetComponent } from './components/reset/reset.component';
import { EditComponent } from './components/edit/edit.component';

export const firebaseConfig = {
    apiKey: "AIzaSyATvmgh6JNcjNzAtqV0hcXqHZEnXqfZ1NY",
    authDomain: "login-page-angular.firebaseapp.com",
    databaseURL: "https://login-page-angular.firebaseio.com",
    projectId: "login-page-angular",
    storageBucket: "login-page-angular.appspot.com",
    messagingSenderId: "244108665615"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ResetComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
