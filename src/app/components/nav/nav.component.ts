import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  signOut(){
    this.authService.signOut().then(data => {
      console.log(data);
      console.log('User logged out successfully');
      this.router.navigate(['/home']);
    },err => {
      console.log(err);
    })
  }

  user$ = this.authService.user$;

  ngOnInit(): void {
    console.log()
  }

}
