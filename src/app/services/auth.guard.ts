import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router
  ) { }
 
  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.authService.userState().then(user => {
        this.router.navigate(['/dashboard']);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }

}
